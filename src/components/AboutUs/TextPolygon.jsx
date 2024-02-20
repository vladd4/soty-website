import styles from "./AboutUs.module.scss";

import Polygon from "../../assets/Polygon 3.svg";

const TextPolygon = ({ aos, titles, t }) => {
  return (
    <div
      className={styles.container}
      data-aos={aos}
      data-aos-duration="1500"
      data-aos-offset="0"
    >
      <img
        alt="Polygon"
        src={Polygon}
        className={styles.polygon_parent}
        width="100%"
        height="100%"
      />
      <div className={styles.polygon_text}>
        {titles?.map((title) => {
          return <title.attr key={title.label}>{t(title.label)}</title.attr>;
        })}
      </div>
    </div>
  );
};

export default TextPolygon;
