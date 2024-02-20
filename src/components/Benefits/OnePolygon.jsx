import styles from "./Benefits.module.scss";

const OnePolygon = ({
  t,
  handleHover,
  handleHoverRemove,
  polygon,
  icon,
  label,
}) => {
  return (
    <div
      className={styles.one_polygon}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-duration="1500"
      onMouseOver={handleHover}
      onMouseOut={handleHoverRemove}
    >
      <img alt="Polygon" src={polygon} width="100%" height="100%" />
      <div className={styles.polygon_text}>
        <img alt="Icon" src={icon} width="100%" height="100%" />
        <p>{t(label)}</p>
      </div>
    </div>
  );
};

export default OnePolygon;
