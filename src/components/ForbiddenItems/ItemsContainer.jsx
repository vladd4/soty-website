import styles from "./Forbidden.module.scss";

import Polygon from "../../assets/poly-grey.svg";

const ItemsContainer = ({ image, title, t }) => {
  return (
    <div
      className={styles.container}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-duration="2000"
    >
      <img
        alt="Polygon"
        src={Polygon}
        className={styles.polygon_parent}
        width="100%"
        height="100%"
      />
      <div className={styles.polygon_text}>
        <img alt="Polygon" src={image} />
        <p>{t(title)}</p>
      </div>
    </div>
  );
};

export default ItemsContainer;
