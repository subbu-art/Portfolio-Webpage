import React, { useState } from 'react';
import './global-chat-popup.css';
import { getImageUrl } from "../../utils";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`global-chat-popup ${isOpen ? 'open' : ''}`}>
      <div className="chat-icon" onClick={togglePopup}>
        <img src={getImageUrl("chatbot/images.png")} alt="chat icon" />
      </div>
      {isOpen && (
        <div className="chat-content-container">
          <iframe
            title="Streamlit Chatbot"
            src="http://localhost:8501"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

