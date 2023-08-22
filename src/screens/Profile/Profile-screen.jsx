import React from "react";
import { useSelector } from "react-redux";
import { Header, Details } from "../../components";
import "./Profile.scss";
import { userData, companyData, addressData } from "../../utils";

function Profile() {
  const selectedUser = useSelector((state) => state.user?.selectedUser);

  return (
    <div className="Profile">
      <Header title="Profile" />
      <div className="container">
        <div className="left-container">
          <img
            src={selectedUser?.profilepicture}
            alt="ProfilePic"
            height={250}
            width={250}
          />
          <h1 className="name">{selectedUser?.name}</h1>
          <Details data={userData(selectedUser)} />
          <p className="company">Company</p>
          <Details data={companyData(selectedUser)} />
        </div>
        <div className="right-container">
          <div className="address-container">
            <p className="address">Address:</p>
            <Details data={addressData(selectedUser)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
