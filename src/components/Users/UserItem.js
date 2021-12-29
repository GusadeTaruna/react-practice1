import React from "react";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <div className="list-item">
      <h3>Username : {props.username}</h3>
      <h3>Age : {props.age}</h3>
    </div>
  );
};

export default UserItem;
