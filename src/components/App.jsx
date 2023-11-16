import "../styles/App.scss";

import { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Context from "../hooks/Context";

import AOS from "aos";
import "aos/dist/aos.css";

import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loader from "./Loader";
import News from "./News/News";
import Partners from "./Partners/Partners";
import Home from "../pages/Home";
import Popup from "./Popup/Popup";
import Modal from "./Modal/Modal";
import Welcome from "./Welcome/Welcome.jsx";

const Individual = lazy(() => import("../pages/Inndividual.jsx"));
// import Individual from "../pages/Inndividual";

const Remote = lazy(() => import("../pages/Remote.jsx"));
const Storage = lazy(() => import("../pages/Storage.jsx"));
const Details = lazy(() => import("../pages/Details.jsx"));
// import Remote from "../pages/Remote";
// import Storage from "../pages/Storage";
// import Details from "../pages/Details";

// window.onload = function () {
//   document.body.classList.remove("loaded");
//   document.body.classList.add("loaded_hiding");
//   window.setTimeout(function () {
//     document.body.classList.add("loaded");
//     document.body.classList.remove("loaded_hiding");
//   }, 500);
// };
const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
    const delay = 3000; // Adjust the delay time as needed
    const hideLoader = () => {
      document.body.classList.add("loaded_hiding");
      window.setTimeout(function () {
        document.querySelector("#loader").style.display = "none";
        document.body.classList.remove("loaded_hiding");
      }, 500);
    };

    // Simulating a delay before hiding the loader
    const timeoutId = setTimeout(hideLoader, delay);
    // Cleanup function to clear the timeout when the component unmounts or when loading is complete
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <Context.Provider value={t}>
      <div className="App">
        <Loader />
        <Header i18n={i18n} />
        <Modal />
        <Popup />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/individual"
            element={
              <Suspense fallback={<div className="empty-page"></div>}>
                <Individual />
              </Suspense>
            }
          />
          <Route
            path="/remote"
            element={
              <Suspense fallback={<div className="empty-page"></div>}>
                <Remote />
              </Suspense>
            }
          />
          <Route
            path="/storage"
            element={
              <Suspense fallback={<div className="empty-page"></div>}>
                <Storage />
              </Suspense>
            }
          />
          <Route
            path="/details"
            element={
              <Suspense fallback={<div className="empty-page"></div>}>
                <Details />
              </Suspense>
            }
          />
        </Routes>
        <Welcome />
        <AboutUs />
        <News title="фотогалерея" />
        <Partners />
        <News title="новини" />
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
