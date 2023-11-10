import styles from "./Forbidden.module.scss";
import Park from "../../assets/cam.png";
import Polygon from "../../assets/poly-grey.svg";

const Forbidden = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          Речі, що <b>ЗАБОРОНЕНО</b> зберігати:
        </h3>
        <article className={styles.image_block}>
          <article className={styles.article_three}>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
          </article>
          <article className={styles.article_two}>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
          </article>
          <article className={styles.article_one}>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div className={styles.container}>
              <img
                alt="Polygon"
                src={Polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};
export default Forbidden;
