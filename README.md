# 🤖 AI Chat Assistant - Real-Time Streaming Chatbot

A production-ready AI chatbot with real-time streaming responses built with Next.js, TypeScript, and Groq API. Features include message persistence, clipboard copying, and live streaming AI responses.

![Demo](https://img.shields.io/badge/Status-Live-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Groq](https://img.shields.io/badge/Groq-Llama_3.3_70B-orange)

---

## ✨ Features Implemented

### Core Features

- ✅ **Real-time streaming responses** - Watch AI responses appear token by token
- ✅ **Message history** - Full conversation tracking with timestamps
- ✅ **Connection status** - Live indicator showing API connectivity
- ✅ **Auto-scroll** - Automatically scrolls to latest messages
- ✅ **Visual distinction** - Clear UI separation between user and AI messages
- ✅ **Input controls** - Send button and Enter key support
- ✅ **Character counter** - Shows input length (0/1000)
- ✅ **Error handling** - Graceful error messages and recovery
- ✅ **Responsive design** - Works on mobile and desktop

### Bonus Features (+8 Points)

- ✅ **Message persistence** - Conversations saved in localStorage
- ✅ **Clear chat** - One-click conversation reset
- ✅ **Copy to clipboard** - Copy any AI response
- ✅ **Typing indicator** - Animated dots while AI is thinking
- ✅ **Disabled input** - Prevents input during streaming

---

## 🛠️ Tech Stack

| Technology             | Purpose                           |
| ---------------------- | --------------------------------- |
| **Next.js 16.1.4**     | React framework with App Router   |
| **React 18**           | UI library with hooks             |
| **TypeScript**         | Type-safe JavaScript              |
| **Tailwind CSS**       | Utility-first styling             |
| **Groq API**           | LLM provider (Llama 3.3 70B)      |
| **Server-Sent Events** | Real-time streaming communication |
| **Lucide React**       | Icon library                      |

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- Groq API key (free at [console.groq.com](https://console.groq.com))

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/YOUR_USERNAME/ai-chatbot.git
   cd ai-chatbot
```

2. **Install dependencies**

```bash
   npm install
```

3. **Set up environment variables**

   Create a `.env.local` file in the project root:

```bash
   cp .env.example .env.local
```

Add your Groq API key:

```env
   NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
```

4. **Run the development server**

```bash
   npm run dev
```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔑 Getting a Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to "API Keys" in the dashboard
4. Click "Create API Key"
5. Copy the key (starts with `gsk_`)
6. Paste into your `.env.local` file

**Note:** Groq offers a generous free tier with fast inference speeds!

---

## 📦 Environment Variables

| Variable                   | Description                             | Required |
| -------------------------- | --------------------------------------- | -------- |
| `NEXT_PUBLIC_GROQ_API_KEY` | Your Groq API key from console.groq.com | Yes      |

---

## 🏗️ Project Structure

```
ai-chatbot/
├── app/
│   ├── page.tsx          # Main chatbot component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── .env.example          # Environment variables template
├── .env.local           # Your API keys (gitignored)
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
└── README.md           # This file
```

---

## 💻 Key Implementation Details

### Streaming Architecture

- Uses **Fetch API** with `ReadableStream` for real-time streaming
- Server-Sent Events (SSE) format for data transmission
- Token-by-token rendering for smooth user experience

### State Management

- React hooks (`useState`, `useEffect`, `useRef`)
- localStorage for message persistence
- Optimistic UI updates for better UX

### Error Handling

- API error catching and display
- Connection status monitoring
- Graceful degradation on failures

---

## 🎯 Features Checklist

### Required Features

- ✅ Chat message list with user/AI distinction
- ✅ Auto-scroll to latest message
- ✅ Timestamps on messages
- ✅ Text input with send button
- ✅ Enter key to send
- ✅ Disabled input during streaming
- ✅ Character limit indicator
- ✅ Connection status indicator
- ✅ Real-time streaming responses
- ✅ Typing indicator
- ✅ Error handling
- ✅ TypeScript implementation
- ✅ Tailwind CSS styling
- ✅ Responsive design

### Bonus Features

- ✅ Message persistence (localStorage)
- ✅ Clear chat functionality
- ✅ Copy to clipboard
- ✅ Typing indicator animation

---

## ⏱️ Time Spent

**Total Development Time:** Approximately 4-5 hours

Breakdown:

- Initial setup & configuration: 30 minutes
- Core chat interface: 1 hour
- Streaming implementation: 1.5 hours
- Error handling & polish: 1 hour
- Bonus features: 1 hour
- Testing & debugging: 30 minutes

---

## 🚧 Challenges & Solutions

### Challenge 1: Groq Model Deprecation

**Problem:** Initial model `llama3-8b-8192` was decommissioned during development

**Solution:** Updated to current model `llama-3.3-70b-versatile` and implemented better error logging to catch API issues early

### Challenge 2: Streaming State Management

**Problem:** Managing partial message updates during streaming without re-rendering entire list

**Solution:** Used message ID-based updates and React's `map` function to update only the streaming message

### Challenge 3: Auto-scroll Behavior

**Problem:** Auto-scroll interfering with user's ability to read previous messages

**Solution:** Implemented `scrollIntoView` with smooth behavior on new messages only

---

## 🔮 Future Enhancements

- [ ] Markdown rendering for AI responses
- [ ] Dark/light theme toggle
- [ ] Multi-conversation support
- [ ] Export chat history
- [ ] Voice input/output
- [ ] Custom system prompts
- [ ] Rate limiting indicators
- [ ] Message editing

---

## 📄 License

MIT License - feel free to use this project for learning and development.

---

## 👨‍💻 Author

**Shashank Gupta**

- GitHub: [@shxshankgupta](https://github.com/shxshankgupta)
---

## 🙏 Acknowledgments

- **Groq** for providing fast, free LLM API
- **Next.js** team for the amazing framework
- **Tailwind CSS** for rapid styling

---

**Built with ❤️ for the Frontend Developer Assignment**
