import styles from "./AboutUs.module.scss";

import PolygonYellow from "../../assets/Polygon 5.svg";

const EmptyPolygon = ({ aos }) => {
  return (
    <div
      className={styles.container}
      data-aos={aos}
      data-aos-duration="1500"
      data-aos-offset="0"
    >
      <img alt="Polygon" src={PolygonYellow} width="100%" height="100%" />
    </div>
  );
};

export default EmptyPolygon;
