import React, { useState } from "react";
import formStyles from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [inputNameValid, setInputNameValid] = useState(true);
  const [inputAgeValid, setInputAgeValid] = useState(true);

  let errorName = <p style={{ color: "red" }}>Please input Name</p>;
  let errorAge = <p style={{ color: "red" }}>Please input Age</p>;

  const usernameChangeHandler = (event) => {
    if (enteredUsername.trim().length > 0) {
      setInputNameValid(true);
    }
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (enteredAge.trim().length > 0) {
      setInputAgeValid(true);
    }
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0) {
      setInputNameValid(false);
    }

    if (enteredAge.trim().length === 0) {
      setInputAgeValid(false);
    }

    if (enteredUsername && enteredAge) {
      const userData = {
        id: Math.random().toString(),
        username: enteredUsername,
        age: enteredAge,
      };

      props.onUserAdd(userData);
      setUsername("");
      setAge("");
    }
  };

  return (
    <div className={`${formStyles["form-container"]}`}>
      <form onSubmit={onSubmitHandler}>
        <p>Username</p>
        <input
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          className={`${!inputNameValid ? formStyles.invalid : ""}`}
        ></input>
        {!inputNameValid && errorName}
        <p>Age (Years)</p>
        <input
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
          className={`${!inputAgeValid && formStyles.invalid}`}
        ></input>
        {!inputAgeValid && errorAge}
        <br />
        <Button />
      </form>
    </div>
  );
};

export default UserForm;
