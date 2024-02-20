import styles from "./Allowed.module.scss";

import { Link } from "react-router-dom";

const AllowedLink = ({ polygon, clickHandler, icon, label, t }) => {
  return (
    <Link
      className={styles.container}
      to="/details"
      onClick={clickHandler}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-duration="1500"
    >
      <img
        alt="Polygon"
        src={polygon}
        className={styles.polygon_parent}
        width="100%"
        height="100%"
      />
      <div className={styles.polygon_text}>
        <img alt="Polygon" src={icon} />
        <p>{t(label)}</p>
      </div>
    </Link>
  );
};

export default AllowedLink;
