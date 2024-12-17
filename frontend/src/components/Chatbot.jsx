import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [message, setMessage] = useState([]);
  const [userinput, setUserinput] = useState("");

  const chatWindowRef = useRef(null);

  // Add Message
  const addMessage = (send, text) => {
    setMessage((prev) => [...prev, { send, text }]);
  };

  // Send user message to backend
  const handleSend = async () => {
    if (!userinput.trim()) return; // Don't send empty messages

    // Add user message to the chat window
    addMessage("User", userinput);

    try {
      // Send user input to backend and receive response
      const response = await axios.post("http://127.0.0.1:5000/chatbot", {
        message: userinput,
      });

      // Check if bot response contains products
      if (response.data.products) {
        // Display the list of products found
        const productDetails = response.data.products
          .map((product) => `${product.name} - $${product.price}`)
          .join("\n");
        addMessage("Bot", `Here are the products I found:\n${productDetails}`);
      } else if (response.data.text) {
        // If no products found, show the bot's text message
        addMessage("Bot", response.data.text);
      }
    } catch (error) {
      console.error("Error:", error);
      addMessage("Bot", "Sorry, something went wrong!"); // Fallback message if error occurs
    }

    setUserinput(""); // Clear the input field after sending message
  };

  useEffect(() => {
    chatWindowRef.current?.scrollTo(0, chatWindowRef.current.scrollHeight);
  }, [message]);

  return (
    <div className="chatbot-container">
      <div className="chat-header">E-Commerce ChatBot</div>
      <div className="chat-window" ref={chatWindowRef}>
        {message.map((msg, index) => (
          <div key={index} className={`message${msg.send}`}>
            <strong>{msg.send}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userinput}
          onChange={(e) => setUserinput(e.target.value)}
          placeholder="Search the product name..."
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={() => setMessage([])}>Reset</button>
      </div>
    </div>
  );
};

export default Chatbot;
