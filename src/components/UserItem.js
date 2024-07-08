import React, { useState } from "react";

const UserItem = ({ user, updateUser, deleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUser(editedUser);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteUser(user.id);
  };

  return (
    <div className="user-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
          <input
            type="email"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default UserItem;
