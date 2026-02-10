const { Innertube } = require('youtubei.js');

async function testTranscript(videoId) {
    console.log(`Testing transcript for ${videoId} with youtubei.js...`);
    try {
        const yt = await Innertube.create();
        const info = await yt.getInfo(videoId);

        try {
            const transcript = await info.getTranscript();
            if (transcript && transcript.transcript && transcript.transcript.content && transcript.transcript.content.body) {
                const segments = transcript.transcript.content.body.initial_segments;
                const fullText = segments.map(s => s.snippet.text).join(' ');
                console.log(`[${videoId}] Success! Length: ${fullText.length}`);
                console.log(`[${videoId}] Preview: ${fullText.slice(0, 100)}...`);
            } else {
                console.log(`[${videoId}] No transcript found in the structure.`);
            }
        } catch (transcriptError) {
            console.log(`[${videoId}] getTranscript() failed:`, transcriptError.message);
        }
    } catch (err) {
        console.error(`[${videoId}] Error:`, err.message);
    }
}

async function run() {
    await testTranscript('LV_wiOhO40Q'); // User's video
    await testTranscript('_uQrJ0TkZlc'); // Python in 100s
}

run();
