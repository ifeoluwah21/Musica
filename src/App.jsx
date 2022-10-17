import React, { Fragment } from "react";
import styles from "./App.module.scss";
import Header from "./components/UI/Header/Header";
import AppNav from "./components/UI/Nav/AppNav";
import Recents from "./components/Sections/Recents";
import TopChartMusicItem from "./components/Songs/TopChartMusicItem";
import TopChart from "./components/Sections/TopChart";
const App = () => {
  return (
    <Fragment>
      <Header />
      <AppNav />
      <Recents />
      <TopChart />
      {/* <img src={x} alt="" /> */}
    </Fragment>
  );
};

export default App;
