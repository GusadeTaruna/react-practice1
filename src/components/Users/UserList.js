import React from "react";
import listStyles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  // console.log(props.items);
  return (
    <div className={`${listStyles["list-container"]}`}>
      {props.items.map((user) => {
        return (
          <UserItem key={user.id} id={user.id} username={user.username} age={user.age} onDelete={props.onDeleteUser} />
        );
      })}
    </div>
  );
};

export default UserList;
