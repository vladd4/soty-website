import styles from "./Benefits.module.scss";

const TwoPolygons = ({
  t,
  polygon,
  handleHover_1,
  handleHover_2,
  handleHoverRemove,
  icons,
  labels,
}) => {
  return (
    <div className={styles.two_polygon}>
      <div
        className={styles.two_polygon_parent}
        data-aos="zoom-in-down"
        data-aos-offset="0"
        data-aos-duration="1500"
        onMouseOver={handleHover_1}
        onMouseOut={handleHoverRemove}
      >
        <img alt="Polygon" src={polygon} width="100%" height="100%" />
        <div className={styles.polygon_text}>
          <img alt="Icon" src={icons[0]} width="100%" height="100%" />
          <p>{t(labels[0])}</p>
        </div>
      </div>

      <div
        className={styles.two_polygon_parent}
        data-aos="zoom-in-up"
        data-aos-offset="0"
        data-aos-duration="1500"
        onMouseOver={handleHover_2}
        onMouseOut={handleHoverRemove}
      >
        <img alt="Polygon" src={polygon} width="100%" height="100%" />
        <div className={styles.polygon_text}>
          <img alt="Icon" src={icons[1]} width="100%" height="100%" />
          <p>{t(labels[1])}</p>
        </div>
      </div>
    </div>
  );
};

export default TwoPolygons;
