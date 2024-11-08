import React, { useState } from 'react';

const JoinRoom = ({ onJoin }: any) => {
  const [roomId, setRoomId] = useState('');
  const [userId, setUserId] = useState('');

  const handleJoin = () => {
    if (roomId && userId) {
      onJoin({ room_id: roomId, user_id: userId });
    }
  };

  return (
    <div>
      <h3>Join Room</h3>
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  );
};

export default JoinRoom;

