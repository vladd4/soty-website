import { Link } from "react-router-dom";
import styles from "./WelcomeStorage.module.scss";

import Home from "../../assets/home.svg";
import HomeWhite from "../../assets/home-white.svg";

import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const WelcomeStorage = ({ title, buttonStyle, calc_id }) => {
  const imageRef = useRef(null);
  const handleHover = (src) => {
    if (imageRef.current) {
      imageRef.current.src = src;
    }
  };
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <Link
          className={styles.a}
          to="/"
          onMouseOver={() => handleHover(HomeWhite)}
          onMouseOut={() => handleHover(Home)}
        >
          <img ref={imageRef} alt="Home" src={Home} />
        </Link>
        <div
          className={styles.top_clip}
          data-aos="fade-in-down"
          data-aos-offset="0"
          data-aos-duration="1500"
        >
          <h3>{title}</h3>
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
          Замовити зберігання
        </AnchorLink>
        <div
          className={styles.bottom_clip}
          data-aos="fade-in-up"
          data-aos-offset="0"
          data-aos-duration="1500"
        >
          <p>
            Шукаєш міні склад для свого бізнесу або комору для домашніх речей?
            Індивідуальне зберігання на складі саме для тебе. Зберігай своє
            майно в сухих та надійних боксах розміром від 1м3 до 36 м2.
          </p>
        </div>
      </article>
    </section>
  );
};
export default WelcomeStorage;
