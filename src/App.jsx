import React, { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import AppNav from "./components/UI/Nav/AppNav";
import Recents from "./components/Sections/Recents";
import TopChart from "./components/Sections/TopChart";
import NewRelease from "./components/Sections/NewRelease";
import AreaQuery from "./components/Sections/AreaQuery";
import Footer from "./components/UI/Footer/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ }>

    </Route>
  )
);
const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />

      <Header />
      <AppNav />
      <Recents />
      <TopChart />
      <NewRelease />
      <AreaQuery />
      <Footer />
    </Fragment>
  );
};

export default App;
