
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import JoinRoom from './components/JoinRoom';
import ChatRoom from './components/ChatRoom';
import UserActions from './components/UserActions';

const socket = io('http://localhost:9696');

const App = () => {
  const [roomId, setRoomId] = useState('');
  const [userId, setUserId] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (data : any) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on('alert', (data) => {
      alert(data.msg);
    });

    return () => {
      socket.off('message');
      socket.off('alert');
    };
  }, []);

  const handleJoinRoom = (data : any) => {
    setRoomId(data.room_id);
    setUserId('MohammedNayeemE');
    socket.emit('joinRoom', data);
  };

  const handleSendMessage = (data) => {
    socket.emit('message', data);
  };

  const handleBlockUser = (data) => {
    socket.emit('block_user', data);
  };

  const handlePrivilegeLift = (data) => {
    socket.emit('priviledge_lift', data);
  };

  return (
    <div>
      <h1>Chat Application</h1>
      {!roomId ? (
        <JoinRoom onJoin={handleJoinRoom} />
      ) : (
        <>
          <ChatRoom
            roomId={roomId}
            userId={userId}
            onSendMessage={handleSendMessage}
            messages={messages}
          />
          <UserActions
            roomId={roomId}
            userId={userId}
            onBlockUser={handleBlockUser}
            onPrivilegeLift={handlePrivilegeLift}
          />
        </>
      )}
    </div>
  );
};

export default App;
