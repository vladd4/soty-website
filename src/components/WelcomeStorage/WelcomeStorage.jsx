import styles from "./WelcomeStorage.module.scss";

import { useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Home from "../../assets/home.svg";
import HomeWhite from "../../assets/home-white.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";

import Context from "../../hooks/Context";

const WelcomeStorage = ({ title, buttonStyle, calc_id, info, backImage }) => {
  const t = useContext(Context);
  const imageRef = useRef(null);

  const handleHover = (src) => {
    if (imageRef.current) {
      imageRef.current.src = src;
    }
  };
  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <article className={styles.wrapper}>
        <Link
          className={styles.a}
          to="/"
          onMouseOver={() => handleHover(HomeWhite)}
          onMouseOut={() => handleHover(Home)}
        >
          <img
            ref={imageRef}
            alt="Home"
            src={Home}
            width="100%"
            height="100%"
          />
        </Link>
        <div
          className={styles.top_clip}
          data-aos="fade-in-down"
          data-aos-offset="0"
          data-aos-duration="1500"
        >
          <h3>{t(title)}</h3>
        </div>
        <AnchorLink
          href={`#${calc_id}`}
          data-aos="zoom-out"
          data-aos-offset="0"
          data-aos-duration="2500"
          className={
            buttonStyle === "yellow"
              ? styles.button_yellow
              : buttonStyle === "blue"
              ? styles.button_blue
              : styles.button
          }
        >
          {t("order_btn")}
        </AnchorLink>
        <div
          className={styles.bottom_clip}
          data-aos="fade-in-up"
          data-aos-offset="0"
          data-aos-duration="1500"
        >
          {buttonStyle ? (
            <p>{t(info)}</p>
          ) : (
            <p>
              {t(info)}{" "}
              {
                <a
                  href="https://docs.google.com/document/d/1CUcEp5vyPVeNSXUfGjDp2ew_V31RybuT04vuxdy5kFk/edit?tab=t.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("public_document")}
                </a>
              }
            </p>
          )}
        </div>
      </article>
    </section>
  );
};
export default WelcomeStorage;
