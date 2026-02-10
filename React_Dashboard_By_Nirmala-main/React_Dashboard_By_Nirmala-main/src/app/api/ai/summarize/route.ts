import { NextRequest, NextResponse } from "next/server";
import { Innertube } from "youtubei.js";
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

        // Fetch Transcript via youtubei.js (more robust)
        let transcriptText = "";
        try {
            console.log(`Fetching transcript for videoId: ${videoId} using youtubei.js...`);
            const yt = await Innertube.create();
            const info = await yt.getInfo(videoId);

            try {
                const transcript = await info.getTranscript();
                if (transcript && transcript.transcript && transcript.transcript.content && transcript.transcript.content.body) {
                    const segments = transcript.transcript.content.body.initial_segments;
                    transcriptText = segments.map(s => s.snippet.text).join(' ');
                } else {
                    throw new Error("No transcript found in video structure.");
                }
            } catch (tError: any) {
                console.error("Transcript content error:", tError);
                throw new Error("Transcripts are disabled or not available for this video.");
            }

            if (!transcriptText) {
                throw new Error("Transcript content is empty.");
            }

            console.log(`Transcript fetched. Length: ${transcriptText.length} characters.`);

        } catch (error: any) {
            console.error("Transcript Error:", error);
            const msg = error.message?.toLowerCase() || "";

            let errorMessage = "Could not fetch transcript. Please try another video.";

            if (msg.includes("transcript") || msg.includes("caption") || msg.includes("disabled") || msg.includes("not available")) {
                errorMessage = "This video does not have captions/transcripts available. Please try a video with closed captions.";
            } else if (msg.includes("sign in") || msg.includes("age") || msg.includes("members only")) {
                errorMessage = "This video is restricted (age-restricted or members-only) and cannot be summarized.";
            } else if (msg.includes("403") || msg.includes("429") || msg.includes("forbidden") || msg.includes("too many requests")) {
                errorMessage = "YouTube is temporarily blocking requests from the server. Please try again in a few minutes.";
            }

            return NextResponse.json({ error: errorMessage, details: error.message }, { status: 404 });
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
