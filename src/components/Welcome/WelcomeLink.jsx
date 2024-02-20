import styles from "./Welcome.module.scss";

import { Link } from "react-router-dom";

const WelcomeLink = ({ href, image, title, t }) => {
  return (
    <Link to={href}>
      <img alt="Polygon" src={image} width="368" height="398" />
      <h3 className={styles.poly_text}>{t(title)}</h3>
    </Link>
  );
};

export default WelcomeLink;
