import styles from "./AboutUs.module.scss";

import { useContext } from "react";

import Context from "../../hooks/Context";

import EmptyPolygon from "./EmptyPolygon";
import TextPolygon from "./TextPolygon";

const About = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <article className={styles.image_block}>
          <article>
            <TextPolygon
              aos="zoom-in-down"
              titles={[
                { attr: "p", label: "about_storage_p1" },
                { attr: "h3", label: "about_client_h" },
                { attr: "p", label: "about_client_p" },
              ]}
              t={t}
            />
            <EmptyPolygon aos="zoom-in-down" />
          </article>
          <article className={styles.polygon_2}>
            <EmptyPolygon aos="zoom-in-right" />
            <TextPolygon
              aos="zoom-in"
              titles={[
                { attr: "p", label: "about_storage_p1" },
                { attr: "h3", label: "about_storage_h" },
                { attr: "p", label: "about_storage_p" },
              ]}
              t={t}
            />
            <TextPolygon
              aos="zoom-in-left"
              titles={[
                { attr: "p", label: "about_ukr_p1" },
                { attr: "h3", label: "about_ukr_h" },
                { attr: "p", label: "about_ukr_p" },
              ]}
              t={t}
            />
          </article>
          <article className={styles.polygon_3}>
            <TextPolygon
              aos="zoom-in-up"
              titles={[{ attr: "p", label: "about_own_p" }]}
              t={t}
            />
            <EmptyPolygon aos="zoom-in-up" />
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
