import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/Users/UserList';

function App() {
  const [userData, setUserData] = useState([]);

  function addUserHandler(users) {
    setUserData(function (prevUsers) {
      return [users, ...prevUsers];
    });
  }

  return (
    <div>
      <UserForm onUserAdd={addUserHandler}/>
      <h2 style={{ margin: "20px" }}>User List</h2>
      <UserList items={userData}/>
    </div>
  );
}

export default App;
