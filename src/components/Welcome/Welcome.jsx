import styles from "./Welcome.module.scss";
import Sotu from "../../assets/welcome.png";
import Orange from "../../assets/Polygon-main-orange.svg";
import BLue from "../../assets/Polygon-main-blue.svg";
import Yellow from "../../assets/Polygon-main-yellow.svg";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <img alt="Welcome" src={Sotu} className={styles.image} />
        <div className={styles.links_block}>
          <article className={styles.links_block_row}>
            <Link to="/individual">
              <img alt="Polygon" src={Orange} />
              <h3 className={styles.poly_text}>Iндивідуальне зберігання</h3>
            </Link>
          </article>
          <article className={styles.links_block_row_2}>
            <Link to="/remote">
              <img alt="Polygon" src={BLue} />
              <h3 className={styles.poly_text}>Віддалене зберігання</h3>
            </Link>
            <Link to="/storage">
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
