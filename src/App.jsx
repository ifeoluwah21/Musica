import React, { Fragment } from "react";
import styles from "./App.module.scss";
import Header from "./components/UI/Header/Header";
import AppNav from "./components/UI/Nav/AppNav";
import Recents from "./components/Sections/Recents";
import TopChart from "./components/Sections/TopChart";
import NewRelease from "./components/Sections/NewRelease";
import AreaQuery from "./components/Sections/AreaQuery";
import Footer from "./components/UI/Footer/Footer";
const App = () => {
  return (
    <Fragment>
      <Header />
      <AppNav />
      <Recents />
      <TopChart />
      <NewRelease />
      <AreaQuery />
      <Footer />
      {/* <img src={x} alt="" /> */}
    </Fragment>
  );
};

export default App;
