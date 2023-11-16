import styles from "./Allowed.module.scss";
import Park from "../../assets/park.png";
import { Link } from "react-router-dom";

const Allowed = ({ polygon }) => {
  const handleCLick = () => {
    window.scrollTo(0, 0);
    document.querySelector("#home-link").classList.add("show_home");
  };
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          Речі, що <b>ДОЗВОЛЕНО</b> зберігати:
        </h3>
        <article className={styles.image_block}>
          <article className={styles.article_one}>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
          </article>
          <article className={styles.article_two}>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
          </article>
          <article className={styles.article_three}>
            <div
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </div>
            <Link
              to="/details"
              className={styles.container}
              onClick={handleCLick}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Park} />
                <p>Меблі</p>
              </div>
            </Link>
          </article>
        </article>
      </article>
    </section>
  );
};
export default Allowed;
