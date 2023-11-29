import styles from "./Welcome.module.scss";

import Sotu from "../../assets/welcome.png";
import Orange from "../../assets/Polygon-main-orange.svg";
import BLue from "../../assets/Polygon-main-blue.svg";
import Yellow from "../../assets/Polygon-main-yellow.svg";

import { Link } from "react-router-dom";
import { useRef } from "react";
import useResize from "../../hooks/useResize";

const Welcome = () => {
  const ref = useRef(null);
  const isMobile = useResize(null, null, null);

  return (
    <section className={styles.root} ref={ref}>
      <article className={styles.wrapper}>
        {isMobile ? (
          <div
            className={styles.links_block}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <article className={styles.links_block_row}>
              <Link to="/individual">
                <img alt="Polygon" src={Orange} width="100%" height="100%" />
                <h3 className={styles.poly_text}>Iндивідуальне зберігання</h3>
              </Link>
            </article>
            <article className={styles.links_block_row_2}>
              <Link to="/remote">
                <img alt="Polygon" src={BLue} width="100%" height="100%" />
                <h3 className={styles.poly_text}>Віддалене зберігання</h3>
              </Link>
              <Link to="/storage">
                <img alt="Polygon" src={Yellow} width="100%" height="100%" />
                <h3 className={styles.poly_text}>Склади</h3>
              </Link>
            </article>
          </div>
        ) : (
          <>
            <img
              alt="Welcome"
              src={Sotu}
              width="100%"
              height="100%"
              className={styles.image}
              data-aos="fade-right"
              data-aos-duration="1500"
            />
            <div
              className={styles.links_block}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <article className={styles.links_block_row}>
                <Link to="/individual">
                  <img alt="Polygon" src={Orange} width="100%" height="100%" />
                  <h3 className={styles.poly_text}>Iндивідуальне зберігання</h3>
                </Link>
              </article>
              <article className={styles.links_block_row_2}>
                <Link to="/remote">
                  <img alt="Polygon" src={BLue} width="100%" height="100%" />
                  <h3 className={styles.poly_text}>Віддалене зберігання</h3>
                </Link>
                <Link to="/storage">
                  <img alt="Polygon" src={Yellow} width="100%" height="100%" />
                  <h3 className={styles.poly_text}>Склади</h3>
                </Link>
              </article>
            </div>
          </>
        )}
      </article>
    </section>
  );
};
export default Welcome;
