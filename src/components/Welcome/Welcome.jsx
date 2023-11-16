import styles from "./Welcome.module.scss";

import Sotu from "../../assets/welcome.png";
import Orange from "../../assets/Polygon-main-orange.svg";
import BLue from "../../assets/Polygon-main-blue.svg";
import Yellow from "../../assets/Polygon-main-yellow.svg";

import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

const Welcome = () => {
  const location = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    if (location.pathname !== "/") {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "grid";
    }
  }, [location.pathname]);

  return (
    <section className={styles.root} ref={ref}>
      <article className={styles.wrapper}>
        <img
          alt="Welcome"
          src={Sotu}
          className={styles.image}
          data-aos="zoom-in-right"
          data-aos-duration="5000"
        />
        <div className={styles.links_block}>
          <article className={styles.links_block_row}>
            <Link
              to="/individual"
              data-aos="zoom-in-up"
              data-aos-duration="5000"
            >
              <img alt="Polygon" src={Orange} />
              <h3 className={styles.poly_text}>Iндивідуальне зберігання</h3>
            </Link>
          </article>
          <article className={styles.links_block_row_2}>
            <Link to="/remote" data-aos="zoom-in-righ" data-aos-duration="4000">
              <img alt="Polygon" src={BLue} />
              <h3 className={styles.poly_text}>Віддалене зберігання</h3>
            </Link>
            <Link
              to="/storage"
              data-aos="zoom-in-left"
              data-aos-duration="4000"
            >
              <img alt="Polygon" src={Yellow} />
              <h3 className={styles.poly_text}>Склади</h3>
            </Link>
          </article>
        </div>
      </article>
    </section>
  );
};
export default Welcome;
