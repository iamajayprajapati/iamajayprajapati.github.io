"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Key, Loader2, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "model";
  text: string;
};

const SYSTEM_PROMPT = `You are the personal AI assistant for Ajay Prajapati, a Ph.D. Research Scholar at Indian Institute of Information Technology Vadodara (IIITV - ICD).
Your goal is to answer questions about Ajay's academic background, research, publications, and experience politely and professionally.
Here is the key information about Ajay:
- Education: Pursuing Ph.D. in CSE at IIITV. Holds an M.Sc. in Computer Science from BHU (2023) and B.Tech in CSE from AKTU (2021).
- Research Areas: Offline Handwriting Recognition, Computer Vision, Explainable AI (XAI), Machine Learning, Fractal Analysis, and Multilingual AI.
- Key Publications: "Offline Handwriting Recognition using Deep Convolutional Neural Networks for Devanagari Script", "Fractal surfaces in Lebesgue spaces", "Personality Classification from Handwriting Using Pretrained CNN Architectures".
- Experience: Teaching Assistant for multiple courses (OS, COA, OOP, AICTE QIP programs) at IIITV. Program & Website Committee Member for GAANA-2025, MADP-2024, CGAC-2024, FGRF-2024.
- Tone: Professional, helpful, concise, and enthusiastic.
If a user asks a question not related to Ajay or computer science research, politely steer the conversation back to Ajay's professional profile.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [isKeySaved, setIsKeySaved] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hi! I am Ajay's AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) {
      setApiKey(savedKey);
      setIsKeySaved(true);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const saveKey = () => {
    if (apiKey.trim().length > 10) {
      localStorage.setItem("gemini_api_key", apiKey.trim());
      setIsKeySaved(true);
    }
  };

  const removeKey = () => {
    localStorage.removeItem("gemini_api_key");
    setApiKey("");
    setIsKeySaved(false);
    setMessages([{ role: "model", text: "API Key removed. Please enter a new key to continue chatting." }]);
  };

  const sendMessage = async () => {
    if (!input.trim() || !isKeySaved) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages as Message[]);
    setInput("");
    setIsLoading(true);

    try {
      const history = newMessages.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: history,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "model", text: `Error: ${data.error.message}. Please check your API key.` },
        ]);
      } else {
        const botReply = data.candidates[0].content.parts[0].text;
        setMessages((prev) => [...prev, { role: "model", text: botReply }]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Sorry, there was a network error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--royal-blue), var(--cyan))",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37, 99, 235, 0.4)",
          zIndex: 9999,
        }}
        aria-label="Open AI Chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: "fixed",
              bottom: 90,
              left: 24,
              width: 350,
              height: 500,
              maxWidth: "calc(100vw - 48px)",
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              zIndex: 9999,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px",
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(6,182,212,0.1))",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    background: "var(--gradient-blue)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <Bot size={22} />
                </div>
                <span style={{ fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                  Ajay's AI Assistant
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-secondary)",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {!isKeySaved ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <Key size={32} style={{ color: "var(--royal-blue)", marginBottom: 12 }} />
                  <h4 style={{ marginBottom: 8, color: "var(--text-primary)" }}>API Key Required</h4>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>
                    Please enter your free Google Gemini API key to chat with the AI. Your key is only stored locally in your browser.
                  </p>
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid var(--border)",
                      background: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      marginBottom: 12,
                    }}
                  />
                  <button
                    onClick={saveKey}
                    className="btn-primary"
                    style={{ width: "100%", padding: "10px" }}
                  >
                    Save Key & Start Chat
                  </button>
                </div>
              ) : (
                <>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                        flexDirection: msg.role === "user" ? "row-reverse" : "row",
                        maxWidth: "85%",
                      }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: msg.role === "user" ? "var(--bg-secondary)" : "var(--royal-blue)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: msg.role === "user" ? "var(--text-primary)" : "white",
                          flexShrink: 0,
                        }}
                      >
                        {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      <div
                        style={{
                          background: msg.role === "user" ? "var(--royal-blue)" : "var(--bg-secondary)",
                          color: msg.role === "user" ? "white" : "var(--text-primary)",
                          padding: "10px 14px",
                          borderRadius: 12,
                          fontSize: 13.5,
                          lineHeight: 1.5,
                          borderTopLeftRadius: msg.role === "model" ? 2 : 12,
                          borderTopRightRadius: msg.role === "user" ? 2 : 12,
                        }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div style={{ display: "flex", gap: 10, alignSelf: "flex-start" }}>
                      <div
                        style={{
                          width: 28, height: 28, borderRadius: "50%",
                          background: "var(--royal-blue)", display: "flex",
                          alignItems: "center", justifyContent: "center", color: "white",
                        }}
                      >
                        <Bot size={14} />
                      </div>
                      <div style={{ padding: "10px 14px", background: "var(--bg-secondary)", borderRadius: 12 }}>
                        <Loader2 size={16} className="animate-spin" style={{ color: "var(--text-secondary)" }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            {isKeySaved && (
              <div
                style={{
                  padding: "16px",
                  borderTop: "1px solid var(--border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  style={{ display: "flex", gap: 8 }}
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Ajay..."
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 20,
                      border: "1px solid var(--border)",
                      background: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: input.trim() ? "var(--royal-blue)" : "var(--bg-primary)",
                      color: input.trim() ? "white" : "var(--text-muted)",
                      border: input.trim() ? "none" : "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: input.trim() ? "pointer" : "default",
                      transition: "all 0.2s",
                    }}
                  >
                    <Send size={16} />
                  </button>
                </form>
                <div style={{ textAlign: "center", marginTop: 8 }}>
                  <button
                    onClick={removeKey}
                    style={{
                      background: "none", border: "none", fontSize: 11,
                      color: "var(--text-muted)", cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Remove API Key
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
