import styles from "./Popup.module.scss";

import Polygon from "../../assets/calc-white.png";

import { useSelector } from "react-redux";

import { useContext } from "react";

import Context from "../../hooks/Context";

const Popup = () => {
  const { title, info } = useSelector((state) => state.popup);
  const t = useContext(Context);

  const color = window.sessionStorage.getItem("colorCode");

  return (
    <section className={styles.root} id="popup">
      <article className={styles.wrapper} style={{ backgroundColor: color }}>
        <h4>{t(title)}</h4>
        <div className={styles.list_block}>
          <div className={styles.list_item}>
            <div className={styles.list_heading}>
              <img alt="Point" src={Polygon} width="100%" height="100%" />
              <p>{t(info)}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Popup;
