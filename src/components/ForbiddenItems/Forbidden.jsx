import styles from "./Forbidden.module.scss";
import Park from "../../assets/cam.png";
import Polygon from "../../assets/poly-grey.svg";
import { useContext } from "react";
import Context from "../../hooks/Context";

const Forbidden = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          Речі, що <b>ЗАБОРОНЕНО</b> зберігати:
        </h3>
        <article className={styles.image_block}>
          <article className={styles.article_three}>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_prod")}</p>
              </div>
            </div>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_ros")}</p>
              </div>
            </div>
          </article>
          <article className={styles.article_two}>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_weapon")}</p>
              </div>
            </div>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_ball")}</p>
              </div>
            </div>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_fuel")}</p>
              </div>
            </div>
          </article>
          <article className={styles.article_one}>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="2000"
            >
              <img
                width="100%"
                height="100%"
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_tocs")}</p>
              </div>
            </div>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_smell")}</p>
              </div>
            </div>
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
                <img alt="Polygon" src={Park} />
                <p>{t("ind_fob_other")}</p>
              </div>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};
export default Forbidden;
