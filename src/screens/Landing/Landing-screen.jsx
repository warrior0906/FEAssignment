import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setSelectedUser } from "../../store/slice/UsersSlice";
import { User } from "../../components";
import "./Landing.scss";

function Landing() {
  const users = useSelector((state) => state.user?.usersData);
  const selectedUser = useSelector((state) => state.user?.selectedUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="landing-container">
      {selectedUser && <Navigate to="/home" replace={true} />}
      <h3>Select an account</h3>
      <ul className="account-container">
        {users?.map((item) => (
          <User
            key={item?.id}
            imgUrl={item?.profilepicture}
            name={item?.name}
            onPress={() => dispatch(setSelectedUser(item))}
          />
        ))}
      </ul>
    </div>
  );
}

export default Landing;
