import styles from "./Header.module.scss";

import Logo from "../../assets/соти_final.svg";
import Hamburger from "../../assets/hamburger.svg";
import Instagram from "../../assets/instagram 1.png";
import Telegram from "../../assets/facebook 1.png";
import Home from "../../assets/home.svg";
import Map from "../../assets/point.svg";
import Phone from "../../assets/tel.svg";
import PhoneHovered from "../../assets/phone-hovered.svg";

import { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../hooks/Context";

import Burger from "../Burger/Burger";

import { showModal } from "../../utils/showModal";

const Header = ({ i18n }) => {
  const t = useContext(Context);
  const imageRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleHover = (src) => {
    if (imageRef.current) {
      imageRef.current.src = src;
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    language === "en"
      ? document.querySelector("#en").classList.add(styles.current_lang)
      : document.querySelector("#en").classList.remove(styles.current_lang);
    language === "ua"
      ? document.querySelector("#ua").classList.add(styles.current_lang)
      : document.querySelector("#ua").classList.remove(styles.current_lang);
  };
  return (
    <header className={styles.root}>
      <article className={styles.wrapper}>
        <img
          alt="Logo"
          src={Logo}
          className={styles.logo}
          width="100%"
          height="100%"
        />
        <div className={styles.text_block}>
          <Link id="home-link" to="/" className={styles.home_link}>
            <img alt="Home" src={Home} width="100%" height="100%" />
          </Link>
          <div className={styles.language_block}>
            <p
              id="ua"
              className={styles.current_lang}
              onClick={() => changeLanguage("ua")}
            >
              UA
            </p>
            <span>|</span>
            <p id="en" onClick={() => changeLanguage("en")}>
              EN
            </p>
          </div>
          <img
            alt="Hamburger"
            id="burger-icon"
            src={Hamburger}
            width="100%"
            height="100%"
            className={`${styles.hamburger} ${
              clicked ? styles.transformed : ""
            }`}
            onClick={handleClick}
          />
          <a
            href="https://maps.app.goo.gl/M4MpJLJrim7oRBW9A"
            target="_blank"
            rel="noreferrer"
            className={styles.location_block}
          >
            <img alt="Location" src={Map} width="100%" height="100%" />
            <p>{t("location")}</p>
          </a>
          <div className={styles.social_block}>
            <a
              href="https://www.facebook.com/people/Leader-company/61553362610336/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Telegram" src={Telegram} width="100%" height="100%" />
            </a>
            <a
              href="https://www.facebook.com/people/Leader-company/61553362610336/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Instagram" src={Instagram} width="100%" height="100%" />
            </a>
          </div>
          <img
            className={styles.tel}
            width="100%"
            height="100%"
            onMouseOver={() => handleHover(PhoneHovered)}
            onMouseOut={() => handleHover(Phone)}
            ref={imageRef}
            alt="Phone"
            src={Phone}
            onClick={showModal}
          />
        </div>
      </article>
      <Burger clicked={clicked} setClicked={setClicked} />
    </header>
  );
};
export default Header;
