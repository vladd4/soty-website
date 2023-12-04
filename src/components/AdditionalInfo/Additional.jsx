import styles from "./Additional.module.scss";

import PolygonRight from "../../assets/polygon-right.png";
import PolygonLeft from "../../assets/poly-left.png";

import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Context from "../../hooks/Context";

const Additional = () => {
  const t = useContext(Context);
  const navigate = useNavigate();
  const { title, info, icon } = useSelector((state) => state.additional);

  useEffect(() => {
    if (!title.trim() && !info.trim()) {
      navigate(-1);
    }
  }, [title, info, navigate]);

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <img
          alt="Polygon"
          src={PolygonRight}
          className={styles.poly_right}
          width="100%"
          height="auto"
        />
        <div className={styles.left_div}>
          <img
            alt="Polygon"
            src={PolygonLeft}
            className={styles.poly_left}
            width="100%"
            height="auto"
          />
          <img className={styles.icon} alt="Additional icon" src={icon} />
        </div>
        <div className={styles.header_block}>
          <h3>{t(title)}</h3>
          <p>{t(info)}</p>
        </div>
        <button className={styles.backTo} onClick={() => navigate(-1)}>
          {t("return_btn")}
        </button>
      </article>
    </section>
  );
};
export default Additional;
