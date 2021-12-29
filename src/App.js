import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import listSyles from "./components/Users/UserList.module.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserHandler = (users) => {
    setUserData((prevUsers) => {
      return [users, ...prevUsers];
    });
  };

  const deleteUserHandler = (userId) => {
    setUserData((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  let content = (
    <h3 className={`${listSyles["list-container"]}`}>No user data</h3>
  );

  if (userData.length > 0) {
    content = <UserList items={userData} onDeleteUser={deleteUserHandler}/>;
  }

  return (
    <div>
      <UserForm onUserAdd={addUserHandler} />
      <h2 style={{ margin: "20px" }}>User List</h2>
      {content}
    </div>
  );
}

export default App;
