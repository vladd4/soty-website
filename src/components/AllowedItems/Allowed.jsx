import styles from "./Allowed.module.scss";

import Toys from "../../assets/h.svg";
import Clothes from "../../assets/allowed/clothes-icon.svg";
import Tyres from "../../assets/allowed/tire-icon.svg";
import Mebli from "../../assets/allowed/furniture-icon.svg";
import Sport from "../../assets/allowed/sport-equipment-icon.svg";
import Tech from "../../assets/allowed/office-equipment.svg";
import Docs from "../../assets/allowed/documents-icon.svg";
import Other from "../../assets/allowed/tools-icon.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../hooks/Context";
import { useDispatch } from "react-redux";
import { setTitle, setInfo, setIcon } from "../../redux/slices/additionalSlice";

const Allowed = ({ polygon }) => {
  const t = useContext(Context);
  const dispatch = useDispatch();
  const handleCLick = (title, info, icon) => {
    window.scrollTo(0, 0);
    document.querySelector("#home-link").classList.add("show_home");
    dispatch(setTitle(title));
    dispatch(setInfo(info));
    dispatch(setIcon(icon));
  };
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>
          Речі, що <b>ДОЗВОЛЕНО</b> зберігати:
        </h3>
        <article className={styles.image_block}>
          <article className={styles.article_one}>
            <Link
              className={styles.container}
              to="/details"
              onClick={() =>
                handleCLick("ind_all_tech", "ind_all_tech_p", Toys)
              }
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
                width="100%"
                height="100%"
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Toys} />
                <p>{t("ind_all_tech")}</p>
              </div>
            </Link>
            <Link
              to="/details"
              onClick={() =>
                handleCLick("ind_all_clothes", "ind_all_clothes_p", Clothes)
              }
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
                width="100%"
                height="100%"
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Clothes} />
                <p>{t("ind_all_clothes")}</p>
              </div>
            </Link>
            <Link
              className={styles.container}
              to="/details"
              onClick={() =>
                handleCLick("ind_all_tyres", "ind_all_tyres_p", Tyres)
              }
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                width="100%"
                height="100%"
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Tyres} />
                <p>{t("ind_all_tyres")}</p>
              </div>
            </Link>
          </article>
          <article className={styles.article_two}>
            <Link
              to="/details"
              onClick={() =>
                handleCLick("ind_all_mebli", "ind_all_mebli_p", Mebli)
              }
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                width="100%"
                height="100%"
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Mebli} />
                <p>{t("ind_all_mebli")}</p>
              </div>
            </Link>
            <Link
              to="/details"
              onClick={() =>
                handleCLick("ind_all_sport", "ind_all_sport_p", Sport)
              }
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
                width="100%"
                height="100%"
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Sport} />
                <p>{t("ind_all_sport")}</p>
              </div>
            </Link>
            <Link
              to="/details"
              className={styles.container}
              onClick={() =>
                handleCLick("ind_all_offTech", "ind_all_offTech_p", Tech)
              }
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                width="100%"
                height="100%"
                src={polygon}
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Tech} />
                <p>{t("ind_all_offTech")}</p>
              </div>
            </Link>
          </article>
          <article className={styles.article_three}>
            <Link
              to="/details"
              onClick={() =>
                handleCLick("ind_all_docs", "ind_all_docs_p", Docs)
              }
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                width="100%"
                height="100%"
                className={styles.polygon_parent}
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Docs} />
                <p>{t("ind_all_docs")}</p>
              </div>
            </Link>

            <Link
              to="/details"
              onClick={() =>
                handleCLick("ind_all_other", "ind_all_other_p", Other)
              }
              className={styles.container}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              <img
                alt="Polygon"
                src={polygon}
                className={styles.polygon_parent}
                width="100%"
                height="100%"
              />
              <div className={styles.polygon_text}>
                <img alt="Polygon" src={Other} />
                <p>{t("ind_all_other")}</p>
              </div>
            </Link>
          </article>
        </article>
      </article>
    </section>
  );
};
export default Allowed;
