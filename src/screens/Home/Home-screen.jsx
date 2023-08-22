import React from "react";
import { Tab } from "../../components";
import Profile from "../Profile/Profile-screen";
import Gallery from "../Gallery/Gallery-screen";
import Posts from "../Posts/Posts-screen";
import ToDo from "../ToDo/ToDo-screen";

function Home() {
  return (
    <div>
      <Tab>
        <Profile title="Profile"/>
        <Posts title="Posts"/>
        <Gallery title="Gallery"/>
        <ToDo title="ToDo"/>
      </Tab>
    </div>
  );
}

export default Home;
