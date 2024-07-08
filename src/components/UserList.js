import React, { useState, useEffect } from "react";
import axios from "axios";
import UserItem from "./UserItem";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const addUser = (user) => {
    axios
      .post(apiUrl, user)
      .then((response) => setUsers([...users, response.data]))
      .catch((error) => console.error("Error adding user:", error));
  };

  const updateUser = (updatedUser) => {
    axios
      .put(`${apiUrl}/${updatedUser.id}`, updatedUser)
      .then((response) => {
        setUsers(
          users.map((user) =>
            user.id === updatedUser.id ? response.data : user
          )
        );
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  const deleteUser = (id) => {
    axios
      .delete(`${apiUrl}/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h1>User List</h1>
      <UserForm addUser={addUser} />
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
};

export default UserList;
