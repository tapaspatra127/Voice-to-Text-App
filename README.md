🎤 Voice to Text App (Assignment Project)
👨‍💻 Author

Tapas Ranjan Patra

📌 Project Description

This is a simple Voice-to-Text transcription app built using:

Frontend: React.js

Backend: Node.js + Express

OpenAI API for speech transcription

Users can upload or record audio, and the app will transcribe it into text.

🚀 How to Run the Project

Backend: Node.js, Express

AI Services: OpenAI Whisper (Speech-to-Text), GPT (Text Completion/Chat)

Other: CORS, Axios

📂 Project Structure

voice-app/
├── backend/        # Node.js + Express server
│   ├── server.js   # API routes
│   ├── .env        # OpenAI API Key (not uploaded to GitHub)
│   └── package.json
│
├── frontend/       # React client
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md       # Project documentation

⚙️ Setup Instructions
1️⃣ Clone the repo
git clone https://github.com/your-username/voice-app.git
cd voice-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend/ and add:

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx


Start server:

node server.js

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start


Opens at: http://localhost:3000

📌 Usage

Click Record → Speak.

Wait for Transcription.

Chatbot generates response.


