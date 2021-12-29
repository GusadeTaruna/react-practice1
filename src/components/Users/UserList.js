import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  // console.log(props.items);
  return (
    <div className="list-container">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            username={user.username}
            age={user.age}
          />
        );
      })}
    </div>
  );
};

export default UserList;
