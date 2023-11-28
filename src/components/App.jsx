import "../styles/App.scss";

import { useEffect, lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Context from "../hooks/Context";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loader from "./Loader";
import Popup from "./Popup/Popup";
import Modal from "./Modal/Modal";

const Home = lazy(() => import("../pages/Home.jsx"));
const Individual = lazy(() => import("../pages/Inndividual.jsx"));
const Remote = lazy(() => import("../pages/Remote.jsx"));
const Storage = lazy(() => import("../pages/Storage.jsx"));
const Details = lazy(() => import("../pages/Details.jsx"));

window.onload = function () {
  document.body.classList.remove("loaded");
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};
const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Context.Provider value={t}>
      <div className="App">
        <Loader />
        <Header i18n={i18n} />
        <Modal />
        <Popup />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div className="empty-page"></div>}>
                <Home />
              </Suspense>
            }
          />
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
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
