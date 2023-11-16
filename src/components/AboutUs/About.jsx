import styles from "./AboutUs.module.scss";
import Polygon from "../../assets/Polygon 3.svg";
import PolygonYellow from "../../assets/Polygon 5.svg";
import { useContext } from "react";
import Context from "../../hooks/Context";

const About = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <article className={styles.image_block}>
          <article>
            <div
              className={styles.container}
              data-aos="zoom-in-down"
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
                <h3>{t("about_client_h")}</h3>
                <p>{t("about_client_p")}</p>
              </div>
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <img
                alt="Polygon"
                src={PolygonYellow}
                width="100%"
                height="100%"
              />
            </div>
          </article>
          <article className={styles.polygon_2}>
            <div
              className={styles.container}
              data-aos="zoom-in-right"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <img
                alt="Polygon"
                src={PolygonYellow}
                width="100%"
                height="100%"
              />
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in"
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
                <h3>{t("about_storage_h")}</h3>
                <p>{t("about_storage_p")}</p>
              </div>
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in-left"
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
                <h3>{t("about_ukr_h")}</h3>
                <p>{t("about_ukr_p")}</p>
              </div>
            </div>
          </article>
          <article className={styles.polygon_3}>
            <div
              className={styles.container}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <img alt="Polygon" src={Polygon} width="100%" height="100%" />
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-offset="0"
            >
              <img
                alt="Polygon"
                src={PolygonYellow}
                width="100%"
                height="100%"
              />
            </div>
          </article>
        </article>
        <article
          className={styles.text_block}
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-offset="0"
        >
          <h3>{t("about_h")}</h3>
          <p>{t("about_p")}</p>
        </article>
      </div>
    </section>
  );
};
export default About;
