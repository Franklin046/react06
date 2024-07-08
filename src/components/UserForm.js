import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
