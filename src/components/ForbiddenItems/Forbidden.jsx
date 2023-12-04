import styles from "./Forbidden.module.scss";

import Prod from "../../assets/prohibited/food-icon.svg";
import Ros from "../../assets/prohibited/plant-icon.svg";
import Weapon from "../../assets/prohibited/gun-icon.svg";
import Ball from "../../assets/prohibited/gas-icon.svg";
import Fuel from "../../assets/petrol-icon.svg";
import Tocs from "../../assets/prohibited/toxic-icon.svg";
import Smell from "../../assets/prohibited/scent-icon.svg";
import Other from "../../assets/prohibited/animal-icon.svg";

import Polygon from "../../assets/poly-grey.svg";
import { useContext } from "react";
import Context from "../../hooks/Context";

const Forbidden = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          {t("all_item_first")} <b>{t("fob_item_H")}</b> {t("all_item_last")}
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
                <img alt="Polygon" src={Prod} />
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
                <img alt="Polygon" src={Ros} />
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
                <img alt="Polygon" src={Weapon} />
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
                <img alt="Polygon" src={Ball} />
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
                <img alt="Polygon" src={Fuel} />
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
                <img alt="Polygon" src={Tocs} />
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
                <img alt="Polygon" src={Other} />
                <p>{t("ind_fob_pets")}</p>
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
                <img alt="Polygon" src={Smell} />
                <p>{t("ind_fob_smell")}</p>
              </div>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};
export default Forbidden;
