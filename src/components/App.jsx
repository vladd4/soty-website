import "../styles/App.scss";

import { useEffect } from "react";
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

import { handleLoading } from "../utils/handleLoading.js";
import { Toaster } from "react-hot-toast";
import Fancybox from "./FancyBox.jsx";
import Home from "../pages/Home.jsx";
import Individual from "../pages/Inndividual.jsx";
import Remote from "../pages/Remote.jsx";
import Storage from "../pages/Storage.jsx";
import Details from "../pages/Details.jsx";
import {
  fetchImages,
  fetchIndividualImages,
  fetchRemoteImages,
  fetchStorageImages,
} from "../redux/slices/imagesSlice.js";
import { useDispatch } from "react-redux";

const App = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    handleLoading();
    dispatch(fetchImages());
    dispatch(fetchIndividualImages());
    dispatch(fetchRemoteImages());
    dispatch(fetchStorageImages());
  }, [dispatch]);

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
            <Route path="/" element={<Home />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/remote" element={<Remote />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/details" element={<Details />} />
          </Routes>
          <Footer />
          <Toaster position="top-left" reverseOrder={false} />
        </div>
      </Fancybox>
    </Context.Provider>
  );
};

export default App;
