import "../styles/App.scss";

import { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Context from "../hooks/Context";

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
const Remote = lazy(() => import("../pages/Remote.jsx"));
const Storage = lazy(() => import("../pages/Storage.jsx"));
const Details = lazy(() => import("../pages/Details.jsx"));

const App = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = function () {
      document.body.classList.add("loaded_hiding");
      window.setTimeout(function () {
        setIsLoading(false);
        document.body.classList.remove("loaded_hiding");
      }, 500);
    };
  }, []);

  return (
    <Context.Provider value={t}>
      <div className="App">
        {isLoading && <Loader />}
        <Header i18n={i18n} />
        <Modal />
        <Popup />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route
            path="/individual"
            element={
              <Suspense fallback={<Loader />}>
                <Individual />
              </Suspense>
            }
          />
          <Route
            path="/remote"
            element={
              <Suspense fallback={<Loader />}>
                <Remote />
              </Suspense>
            }
          />
          <Route
            path="/storage"
            element={
              <Suspense fallback={<Loader />}>
                <Storage />
              </Suspense>
            }
          />
          <Route
            path="/details"
            element={
              <Suspense fallback={<Loader />}>
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
