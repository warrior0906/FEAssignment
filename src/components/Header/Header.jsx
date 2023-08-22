import React from "react";
import { useSelector } from "react-redux";
import { User } from "../../components";
import "./Header.scss";

function Header(props) {
  const { title } = props;
  const selectedUser = useSelector((state) => state.user?.selectedUser);

  return (
    <div className="header">
      <h2>{title}</h2>
      <User
        imgUrl={selectedUser?.profilepicture}
        name={selectedUser?.name}
        // onPress={() => dispatch(setSelectedUser(item))}
      />
    </div>
  );
}

export default Header;
