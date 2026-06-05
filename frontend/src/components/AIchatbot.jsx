import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  FiMessageSquare,
  FiSend,
  FiTrendingUp,
  FiBarChart2,
  FiStar,
  FiX,
} from "react-icons/fi";

const AIChatbot = () => {
  const location = useLocation();
  const messagesEndRef = useRef(null);

  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/users") ||
    location.pathname.startsWith("/businesses") ||
    location.pathname.startsWith("/rooms") ||
    location.pathname.startsWith("/beds") ||
    location.pathname.startsWith("/tables") ||
    location.pathname.startsWith("/approvals") ||
    location.pathname.startsWith("/settings");

  const initialMessage = isDashboard
    ? {
      sender: "BizNest AI",
      text:
        "Welcome back.\n\nI can help with:\n• Revenue Forecasting\n• Occupancy Trends\n• Sentiment Analysis\n• Business Recommendations",
    }
    : {
      sender: "BizNest AI",
      text:
        "Welcome to BizNest.\n\nAsk me about:\n• Platform Features\n• Pricing Plans\n• AI Capabilities\n• Business Solutions",
    };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const demoData = [
    { date: "2026-06-01", value: 75 },
    { date: "2026-06-02", value: 80 },
    { date: "2026-06-03", value: 85 },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (customMessage = null) => {
    const messageToSend = customMessage || inputMessage;

    if (!messageToSend.trim()) return;

    const updatedMessages = [
      ...messages,
      {
        sender: "You",
        text: messageToSend,
      },
    ];

    setMessages(updatedMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5001/api/ai/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageToSend,
            historical_data: demoData,
          }),
        }
      );

      const data = await response.json();

      setMessages([
        ...updatedMessages,
        {
          sender: data.sender || "BizNest AI",
          text:
            data.response ||
            "I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          sender: "System",
          text:
            "Unable to connect to AI service. Make sure Flask is running on port 5001.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">

      {/* CHAT WINDOW */}

      {isOpen && (
        <div className="w-[380px] h-[600px] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col mb-4">

          {/* HEADER */}

          <div className="bg-slate-900 border-b border-slate-800 px-5 py-4 flex items-center justify-between">

            <div>
              <h3 className="text-white font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                BizNest AI
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                {isDashboard
                  ? "Business Intelligence Assistant"
                  : "Product Assistant"}
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* QUICK ACTIONS */}

          <div className="p-3 border-b border-slate-800 flex flex-wrap gap-2 bg-slate-950">

            {isDashboard ? (
              <>
                <button
                  onClick={() =>
                    sendMessage("give recommendations")
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Recommendations
                </button>
                <button
                  onClick={() =>
                    sendMessage("health score")
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Health Score
                </button>

                <button
                  onClick={() =>
                    sendMessage("forecast revenue")
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Forecast
                </button>

                <button
                  onClick={() =>
                    sendMessage(
                      "review: Staff was excellent and service was amazing"
                    )
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Analyze Review
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() =>
                    sendMessage("What is BizNest?")
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  About BizNest
                </button>

                <button
                  onClick={() =>
                    sendMessage("What AI features do you offer?")
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  AI Features
                </button>

                <button
                  onClick={() =>
                    sendMessage("Show pricing plans")
                  }
                  className="text-xs px-3 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700"
                >
                  Pricing
                </button>
              </>
            )}
          </div>

          {/* MESSAGES */}

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] whitespace-pre-line p-3 rounded-2xl text-sm ${msg.sender === "You"
                    ? "bg-blue-600 text-white self-end rounded-br-md"
                    : "bg-slate-800 text-slate-100 self-start rounded-bl-md"
                  }`}
              >
                <div className="text-xs opacity-70 mb-1">
                  {msg.sender}
                </div>

                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className="text-slate-400 text-sm italic">
                BizNest AI is analyzing...
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          {/* INPUT */}

          <div className="border-t border-slate-800 p-3 bg-slate-900 flex gap-2">

            <input
              type="text"
              value={inputMessage}
              onChange={(e) =>
                setInputMessage(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder={
                isDashboard
                  ? "Ask for forecasts..."
                  : "Ask about BizNest..."
              }
              className="flex-1 bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
            />

            <button
              onClick={() => sendMessage()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-xl transition"
            >
              <FiSend />
            </button>

          </div>

        </div>
      )}

      {/* FLOATING BUTTON */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105"
      >
        <FiMessageSquare size={28} />
      </button>

    </div>
  );
};

export default AIChatbot; 