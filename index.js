import express from "express";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("🔗 New client connected");

  ws.on("message", async (message) => {
    console.log("📩 Received:", message.toString());

    // Example: echo back
    ws.send(`You said: ${message}`);
  });

  ws.on("close", () => {
    console.log("❌ Client disconnected");
  });
});
