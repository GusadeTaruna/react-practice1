import React, { useState } from "react";
import "./UserForm.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      username: enteredUsername,
      age: enteredAge,
    };

    props.onUserAdd(userData);
    setUsername("");
    setAge("");
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <p>Username</p>
        <input type="text" onChange={usernameChangeHandler}></input>
        <p>Age (Years)</p>
        <input type="number" onChange={ageChangeHandler}></input>
        <br />
        <Button />
      </form>
    </div>
  );
};

export default UserForm;
