
//import React from 'react';

const UserActions = ({ roomId, userId, onBlockUser, onPrivilegeLift }: any) => (
  <div>
    <button onClick={() => onBlockUser({ room_id: roomId, user_id: userId })}>
      Block User
    </button>
    <button onClick={() => onPrivilegeLift({ room_id: roomId, user_id: userId })}>
      Lift Privilege
    </button>
  </div>
);

export default UserActions;
