import "../styles/App.scss";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loader from "./Loader";
import News from "./News/News";
import Partners from "./Partners/Partners";

import { useTranslation } from "react-i18next";
import Context from "../hooks/Context";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Individual from "../pages/Inndividual";
import Popup from "./Popup/Popup";
import Modal from "./Modal/Modal";
import Remote from "../pages/Remote";
import Storage from "../pages/Storage";
import Additional from "./AdditionalInfo/Additional";
import Details from "../pages/Details";
import Upload from "./Upload";

import AdminPanel from "./AdminPanel/AdminPanel";
import Login from "./Login/Login";

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

const App = () => {
  const { t, i18n } = useTranslation();
  const isNotAdminRoute =
    !window.location.pathname.includes("/admin") &&
    !window.location.pathname.startsWith("/login");

  return (
    <Context.Provider value={t}>
      <div className="App">
        <Loader />
        {isNotAdminRoute && (
          <>
            <Header i18n={i18n} />
            <Modal />
            <Popup />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/remote" element={<Remote />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/details" element={<Details />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/admin/*" element={<AdminPanel />} /> */}
        </Routes>
        {isNotAdminRoute && (
          <>
            <AboutUs />
            <News title="фотогалерея" />
            <Partners />
            <News title="новини" />
            <Footer />
          </>
        )}

        {/* <Upload></Upload> */}
      </div>
    </Context.Provider>
  );
};

export default App;
