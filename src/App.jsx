import React, { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import Header from "./components/UI/Header/Header";
// import AppNav from "./components/UI/Nav/AppNav";
//import Recents from "./components/Sections/Recents";
// import TopChart from "./components/Sections/TopChart";
// import NewRelease from "./components/Sections/NewRelease";
// import AreaQuery from "./components/Sections/AreaQuery";
// import Footer from "./components/UI/Footer/Footer";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { loader as homeLoader } from "./components/Sections/TopChart";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={homeLoader} />
    </Route>
  )
);
const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
