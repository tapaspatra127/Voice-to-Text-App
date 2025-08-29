require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const OpenAI = require("openai");


console.log("API Key Loaded?", process.env.OPENAI_API_KEY ? "Yes" : "No");


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File upload setup
const upload = multer({ dest: "uploads/" });

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // put your key in .env file
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Transcription route
app.post("/transcribe", upload.single("audio"), async (req, res) => {
  try {
    const audioFile = fs.createReadStream(req.file.path);

    const response = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "gpt-4o-mini-transcribe", // speech-to-text model
    });

    res.json({ text: response.text });
  } catch (err) {
    console.error("❌ Transcription error:", err);
    res.status(500).json({ error: "Transcription failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
