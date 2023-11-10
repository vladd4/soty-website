import styles from "./Burger.module.scss";

import Insta from "../../assets/inst.svg";
import Face from "../../assets/face.svg";
import Map from "../../assets/point.svg";
import Phone from "../../assets/phone-icon.svg";
import Mail from "../../assets/mail-icon.svg";

import { useRef, useEffect } from "react";

const Burger = ({ clicked, setClicked }) => {
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
        <h3>меню</h3>
        <div className={styles.lang_block}>
          <p>Переключити мову сайту:</p>
          <div className={styles.language_block}>
            <p>EN</p>
            <span>|</span>
            <p className={styles.current_lang}>UA</p>
          </div>
        </div>
        <div className={styles.links_block}>
          <a
            href="https://maps.app.goo.gl/M4MpJLJrim7oRBW9A"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Map" src={Map} />
            <p>м. Львів вул Зелена 301</p>
          </a>
          <a
            href="https://www.facebook.com/people/Leader-company/61553362610336/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Phone" src={Phone} />
            <p>+38(097)-746-37-48</p>
          </a>
          <a
            href="https://www.facebook.com/people/Leader-company/61553362610336/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Mail" src={Mail} />
            <p>sotusotu@gmail.com</p>
          </a>
        </div>
        <div className={styles.social_block}>
          <a
            href="https://www.facebook.com/people/Leader-company/61553362610336/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Facebook" src={Face} />
          </a>
          <a
            href="https://www.facebook.com/people/Leader-company/61553362610336/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Instagram" src={Insta} />
          </a>
        </div>
      </article>
    </section>
  );
};
export default Burger;
