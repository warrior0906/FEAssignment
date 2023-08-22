import React from "react";
import "./User.scss";

function User(props) {
  const { onPress, imgUrl, name } = props;
  return (
    <div className="users" onClick={onPress}>
      <img src={imgUrl} alt="ProfilePic" height={30} width={30} />
      <p className="name">{name}</p>
    </div>
  );
}

export default User;
