import styles from "./Burger.module.scss";

import Insta from "../../assets/instagram 1.png";
import Telega from "../../assets/facebook 1.png";
import Map from "../../assets/point.svg";
import Phone from "../../assets/phone-icon.svg";
import Mail from "../../assets/mail-icon.svg";

import { useRef, useEffect, useContext } from "react";

import Context from "../../hooks/Context";

const Burger = ({ clicked, setClicked }) => {
  const t = useContext(Context);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const burger = document.querySelector("#burger-icon");
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        event.target !== burger
      ) {
        setClicked(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setClicked]);

  return (
    <section
      className={`${styles.root} ${clicked ? "show_burger" : ""}`}
      id="burger"
      ref={componentRef}
    >
      <article className={styles.wrapper}>
        <h3>{t("menu")}</h3>
        <div className={styles.links_block}>
          <a
            href="https://maps.app.goo.gl/M4MpJLJrim7oRBW9A"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Map" src={Map} width="6%" height="100%" />
            <p>{t("location")}</p>
          </a>
          <a href="tel:+380977463748">
            <img alt="Phone" src={Phone} width="6%" height="100%" />
            <p>+38(097)-746-37-48</p>
          </a>
          <a href="mailto:sotusotu@gmail.com">
            <img alt="Mail" src={Mail} width="6%" height="100%" />
            <p>sotusotu@gmail.com</p>
          </a>
        </div>
        <div className={styles.social_block}>
          <a
            href="https://www.instagram.com/soty_tviy_mini_sklad/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Instagram" src={Insta} width="100%" height="100%" />
          </a>
          <a
            href="https://www.facebook.com/people/%25D0%25A1%25D0%25BE%25D1%2582%25D0%25B8-%25D0%25A2%25D0%25B2%25D1%2596%25D0%25B9-%25D0%259C%25D1%2596%25D0%25BD%25D1%2596-%25D0%25A1%25D0%25BA%25D0%25BB%25D0%25B0%25D0%25B4/61553857121742/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Telegram" src={Telega} width="100%" height="100%" />
          </a>
        </div>
      </article>
    </section>
  );
};
export default Burger;
