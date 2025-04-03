# Occams Advisory Chatbot

A simple chatbot that answers questions about Occams Advisory using information from their website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update the website content:
Open `server.js` and replace the `websiteContent` variable with the actual content from Occams Advisory's website.

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Features

- Uses LangChain.js for natural language processing
- Implements free Hugging Face models for inference
- Simple and responsive chat interface
- Context-aware responses based on conversation history

## Note

This chatbot uses only the information available on the Occams Advisory website. It requires manual addition of the website content to function properly.
