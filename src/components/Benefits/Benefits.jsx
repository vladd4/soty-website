import styles from "./Benefits.module.scss";

import Park from "../../assets/park.png";
import People from "../../assets/people.png";
import Safe from "../../assets/safe.png";
import Sale from "../../assets/sale.png";
import Ramp from "../../assets/ramp.png";
import Loc from "../../assets/loc.png";
import Kub from "../../assets/kub.png";
import Cam from "../../assets/cam.png";
import Gryz from "../../assets/gryz.png";
import Bud from "../../assets/bud.png";

import useResize from "../../hooks/useResize";

const icons = [
  {
    text: "Власна парковка",
    icon: Park,
  },
  {
    text: "Професійний та доброзичливий персонал",
    icon: People,
  },
  {
    text: "Власна охорона 24/7",
    icon: Safe,
  },
  {
    text: "Власна рампа та вантажний ліфт",
    icon: Ramp,
  },
  {
    text: "Зручне розташування складів",
    icon: Loc,
  },
  {
    text: "Великий вибір зручних боксів",
    icon: Kub,
  },
  {
    text: "Зовнішній та внутрішній відеонагляд 24/7",
    icon: Cam,
  },
  {
    text: "Необхідна спецтехніка та пакувальні матеріали",
    icon: Gryz,
  },
  {
    text: "Найкращі ціни та система знижок",
    icon: Sale,
  },
  {
    text: "Склади в окремій будівлі на власній територіїї",
    icon: Bud,
  },
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
                <div
                  className={styles.mobile_one_polygon}
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <div className={styles.mobile_polygon_text}>
                    <img alt="Icon" src={icon.icon} />
                    <p>{icon.text}</p>
                  </div>
                </div>
              );
            })}
          </article>
        ) : (
          <>
            <h3>переваги</h3>
            <article className={styles.polygon_block}>
              <div
                className={styles.one_polygon}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
              >
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={People} />
                  <p>Професійний та доброзичливий персонал</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-down"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Safe} />
                    <p>Власна охорона 24/7</p>
                  </div>
                </div>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-up"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Ramp} />
                    <p>Власна рампа та вантажний ліфт</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
              >
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Loc} />
                  <p>Зручне розташування складів</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-down"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Kub} />
                    <p>Великий вибір зручних боксів</p>
                  </div>
                </div>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-up"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Cam} />
                    <p>Зовнішній та внутрішній відеонагляд 24/7</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                onMouseOver={handleHover}
                onMouseOut={handleHoverRemove}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
              >
                <img alt="Polygon" src={polygon} />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Gryz} />
                  <p>Необхідна спецтехніка та пакувальні матеріали</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-down"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Sale} />
                    <p>Найкращі ціни та система знижок</p>
                  </div>
                </div>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-up"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <img alt="Polygon" src={polygon} />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Bud} />
                    <p>Склади в окремій будівлі на власній територіїї</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                onMouseOver={handleHover}
                onMouseOut={handleHoverRemove}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
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
