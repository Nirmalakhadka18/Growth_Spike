import { NextRequest, NextResponse } from "next/server";
import { YoutubeTranscript } from "youtube-transcript";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        // Extract Video ID
        const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;

        if (!videoId) {
            return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 });
        }

        // Fetch Transcript via Node.js library
        let transcriptText = "";
        try {
            console.log(`Fetching transcript for videoId: ${videoId} using youtube-transcript...`);
            const transcript = await YoutubeTranscript.fetchTranscript(videoId);

            if (!transcript || transcript.length === 0) {
                throw new Error("No transcript found for this video.");
            }

            transcriptText = transcript.map(t => t.text).join(' ');
            console.log(`Transcript fetched. Length: ${transcriptText.length} characters.`);

        } catch (error: any) {
            console.error("Transcript Error:", error);
            const errorMessage = error.message?.includes("Transcripts are disabled") ||
                error.message?.includes("No transcript found") ||
                error.message?.includes("could not be found")
                ? "This video does not have captions/transcripts available. Please try a video with closed captions."
                : "Could not fetch transcript. Please try again later.";

            return NextResponse.json({ error: errorMessage }, { status: 404 });
        }

        // Initialize Gemini
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "Server Error: GEMINI_API_KEY is not set." }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
    You are an expert AI tutor.
    Here is the transcript of a YouTube video:
    "${transcriptText.slice(0, 25000)}" 
    (Note: Transcript might be truncated if too long)

    Please provide:
    1. A concise **Summary** of the video content.
    2. Detailed **Study Notes** with bullet points, capturing key concepts and definitions.
    
    Format the output in Markdown.
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ summary: text, transcript: transcriptText });

    } catch (error: any) {
        console.error("API Error:", error);

        if (error.status === 429 || error.message?.includes("429")) {
            return NextResponse.json({ error: "AI Limit Reached: Please wait a moment and try again." }, { status: 429 });
        }

        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
