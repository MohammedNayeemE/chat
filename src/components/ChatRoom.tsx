
import React, { useState } from 'react';

const ChatRoom = ({ roomId, userId, onSendMessage, messages }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message) {
      onSendMessage({ room_id: roomId, user_id: userId, msg: message });
      setMessage('');
    }
  };

  return (
    <div>
      <h3>Chat Room: {roomId}</h3>
      <div>
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.user_id}:</strong> {msg.msg}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
