import "../styles/App.scss";

import { useEffect, lazy, Suspense } from "react";
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
import EmptyPage from "./EmptyPage";

import { handleLoading } from "../utils/handleLoading.js";
import { Toaster } from "react-hot-toast";
import ImageViewer from "./ImageViewer/ImageViewer.jsx";
import Fancybox from "./FancyBox.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const Individual = lazy(() => import("../pages/Inndividual.jsx"));
const Remote = lazy(() => import("../pages/Remote.jsx"));
const Storage = lazy(() => import("../pages/Storage.jsx"));
const Details = lazy(() => import("../pages/Details.jsx"));

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
    handleLoading();
  }, []);

  return (
    <Context.Provider value={t}>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="App">
          <Loader />
          <Header i18n={i18n} />
          <Modal />
          <Popup />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<EmptyPage />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/individual"
              element={
                <Suspense fallback={<EmptyPage />}>
                  <Individual />
                </Suspense>
              }
            />
            <Route
              path="/remote"
              element={
                <Suspense fallback={<EmptyPage />}>
                  <Remote />
                </Suspense>
              }
            />
            <Route
              path="/storage"
              element={
                <Suspense fallback={<EmptyPage />}>
                  <Storage />
                </Suspense>
              }
            />
            <Route
              path="/details"
              element={
                <Suspense fallback={<EmptyPage />}>
                  <Details />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
          <ImageViewer />
          <Toaster position="top-left" reverseOrder={false} />
        </div>
      </Fancybox>
    </Context.Provider>
  );
};

export default App;
