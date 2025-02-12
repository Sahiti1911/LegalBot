import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import logo from "../assests/logo.png"; // Import logo

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    if (question.trim() === "") return;
    try {
      const res = await axios.post("http://localhost:5000/api/chatbot/ask", { question });
      setResponse(res.data.response);
    } catch (error) {
      setResponse("Error fetching response. Please try again.");
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src={logo} alt="Legal Assistant Logo" />
        <ul>
          <li>Home</li>
          <li>Ask AI</li>
          <li>Case Law Search</li>
          <li>Dashboard</li>
        </ul>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="glass-effect">
          <h2>Legal Research Assistant</h2>
          <div className="input-container">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a legal question..."
            />
            <button onClick={handleAsk}>Ask</button>
          </div>
          {response && (
            <div className="chat-response">
              <strong>Response:</strong>
              <p>{response}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
