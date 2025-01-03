import styles from "./Welcome.module.scss";

import { Link } from "react-router-dom";

const WelcomeLink = ({ href, image, title, t, isDisabled }) => {
  return (
    <Link to={href} className={isDisabled ? styles.disabled_link : ""}>
      <img alt="Polygon" src={image} width="368" height="398" />
      <h3 className={styles.poly_text}>
        {t(title)} {isDisabled && <p>Ще в розробці</p>}
      </h3>
    </Link>
  );
};

export default WelcomeLink;
