import React from "react";
import itemStyles from "./UserItem.module.css";

const UserItem = (props) => {
  const userDeleteHandler = () => {
    // console.log(props.id);
    props.onDelete(props.id);
  };

  return (
    <div className={`${itemStyles["list-item"]}`} onClick={userDeleteHandler}>
      <h3>Username : {props.username}</h3>
      <h3>Age : {props.age}</h3>
      <p>Click to delete user</p>
    </div>
  );
};

export default UserItem;
