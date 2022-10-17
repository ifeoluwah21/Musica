import React, { Fragment } from "react";
import styles from "./App.module.scss";
import Header from "./components/UI/Header/Header";
import x from "./assets/images/Vector.svg";
import AppNav from "./components/UI/Nav/AppNav";
import AvatarList from "./components/UI/Avatars/AvatarList";
import Recents from "./components/Sections/Recents";
const App = () => {
  return (
    <Fragment>
      <Header />
      <AppNav />
      <Recents />
      {/* <img src={x} alt="" /> */}
    </Fragment>
  );
};

export default App;
