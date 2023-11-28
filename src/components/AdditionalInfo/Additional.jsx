import styles from "./Additional.module.scss";
import PolygonRight from "../../assets/polygon-right.png";
import PolygonLeft from "../../assets/poly-left.png";
import PointOne from "../../assets/Polygon-orange.svg";
import { useContext } from "react";
import Context from "../../hooks/Context";
import { useSelector } from "react-redux";

const Additional = () => {
  const t = useContext(Context);
  const { title, info } = useSelector((state) => state.additional);
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
        <img
          alt="Polygon"
          src={PolygonLeft}
          className={styles.poly_left}
          width="100%"
          height="auto"
        />
        <div className={styles.header_block}>
          <h3>{t(title)}</h3>
          <p>{t(info)}</p>
        </div>
        <div className={styles.info_block}>
          <h3>Користування нашим сервісом допоможе вам:</h3>
          <div className={styles.info_item}>
            <div className={styles.parent}>
              <img alt="Point" src={PointOne} width="100%" height="100%" />
              <h3>1</h3>
            </div>
            <p>
              Звільнити простір. Панує цікавий парадокс – чим більше ми
              намагаємося зекономити місце, тим більше речей збирається вдома.
              Наше сховище дозволить вам звільнити цінний простір у вашому
              помешканні, зберігаючи при цьому доступ до улюблених речей.
            </p>
          </div>
          <div className={styles.info_item}>
            <div className={styles.parent}>
              <img alt="Point" src={PointOne} />
              <h3>2</h3>
            </div>
            <p>
              Розумні Тарифи. Наші тарифи розроблені з урахуванням багатьох
              факторів, таких як обсяг зберігання, тривалість контракту та типи
              послуг. Ми пропонуємо різні пакети що відповідатимуть Вашим
              потребам, забезпечуючи при цьому відмінне співвідношення ціни і
              якості.
            </p>
          </div>
          <div className={styles.info_item}>
            <div className={styles.parent}>
              <img alt="Point" src={PointOne} />
              <h3>3</h3>
            </div>
            <p>
              Персоналізований підхід. Ми розуміємо, що кожен клієнт унікальний,
              і у нас є рішення для всіх ваших потреб. Наша команда готова
              допомогти вам вибрати оптимальний простір і надати консультації з
              пакування та організації речей.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Additional;
