import styles from "./Benefits.module.scss";
import Park from "../../assets/park.svg";
import useResize from "../../hooks/useResize";

const icons = [
  "Зручне розташування складів",
  "Зовнішній та внутрішній відеонагляд 24/7",
  "Склади в окремій будівлі на власній територіїї",
  "Професійний та доброзичливий персонал",
  "Великий вибір зручних боксів",
  "Власна рампа та вантажний ліфт",
  "Власна парковка",
  "Власна охорона 24/7",
  "Необхідна спецтехніка та пакувальні матеріали",
  "Найкращі ціни та система знижок",
];

const Benefits = ({ polygon }) => {
  const handleHover = () => {
    if (document.querySelector("#popup"))
      document.querySelector("#popup").classList.add("show_popup");
  };
  const handleHoverRemove = () => {
    if (document.querySelector("#popup"))
      document.querySelector("#popup").classList.remove("show_popup");
  };
  const isMobile = useResize(null);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        {isMobile ? (
          <article className={styles.mobile_block}>
            {icons.map((icon) => {
              return (
                <div className={styles.mobile_one_polygon}>
                  <div className={styles.mobile_polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>{icon}</p>
                  </div>
                </div>
              );
            })}
          </article>
        ) : (
          <>
            <h3>переваги</h3>
            <article className={styles.polygon_block}>
              <div className={styles.one_polygon}>
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Park} />
                  <p>Власна парковка</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div className={styles.two_polygon_parent}>
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>Власна парковка</p>
                  </div>
                </div>
                <div className={styles.two_polygon_parent}>
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>Власна парковка</p>
                  </div>
                </div>
              </div>
              <div className={styles.one_polygon}>
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Park} />
                  <p>Власна парковка</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div className={styles.two_polygon_parent}>
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>Власна парковка</p>
                  </div>
                </div>
                <div className={styles.two_polygon_parent}>
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>Власна парковка</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                onMouseOver={handleHover}
                onMouseOut={handleHoverRemove}
              >
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Park} />
                  <p>Власна парковка</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div className={styles.two_polygon_parent}>
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>Власна парковка</p>
                  </div>
                </div>
                <div className={styles.two_polygon_parent}>
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Park} />
                    <p>Власна парковка</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                onMouseOver={handleHover}
                onMouseOut={handleHoverRemove}
              >
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Park} />
                  <p>Власна парковка</p>
                </div>
              </div>
            </article>
          </>
        )}
      </article>
    </section>
  );
};

export default Benefits;
