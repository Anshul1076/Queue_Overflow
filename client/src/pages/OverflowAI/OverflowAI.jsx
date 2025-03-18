import { useState } from "react";
import { Bot, Mic, Moon, Sun } from "lucide-react";
import { motion } from 'framer-motion'
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function OverflowAI() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage, { role: "ai", text: "Processing..." }]);
    setInput("");
    const response = await messageGenerator(input);
    setMessages((prev) => [...prev.slice(0, -1), { role: "ai", text: response }]);
  };

  const API_KEY = import.meta.env.VITE_API_KEY;
  async function messageGenerator(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  }

  return (
    <div className={`mt-10 w-full flex flex-col items-center min-h-screen p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bot /> Overflow AI
          </h1>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
        <div className="p-4 mb-4 max-h-[500px] overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 my-2 rounded-lg w-fit ${msg.role === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300 text-black"}`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            className="flex-1 p-2 border rounded-md"
            placeholder="Ask Overflow AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-md">Send</button>
          {/* <button className="p-2 border rounded-md">
            <Mic />
          </button> */}
        </div>
      </div>
    </div>
  );
}
