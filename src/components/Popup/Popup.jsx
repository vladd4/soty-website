import styles from "./Popup.module.scss";
import Polygon from "../../assets/small-poly.svg";

const Popup = () => {
  return (
    <section className={styles.root} id="popup">
      <article className={styles.wrapper}>
        <h4>
          Наш сервіс допоможе Вам організувати зберігання Вашого майна за
          оптимальною ціною:
        </h4>
        <div className={styles.list_block}>
          <div className={styles.list_item}>
            <div className={styles.list_heading}>
              <img alt="Point" src={Polygon} />
              <h3>Гнучкі тарифи</h3>
            </div>
            <p>
              Залежно від того, чи вам потрібно зберігати речі лише на кілька
              днів чи на тривалий термін, наші фахівці підберуть для Вас тарифи,
              які допоможуть вам зекономити гроші.
            </p>
          </div>
          <div className={styles.list_item}>
            <div className={styles.list_heading}>
              <img alt="Point" src={Polygon} />
              <h3>Персоналізований підхід</h3>
            </div>
            <p>
              Ми розуміємо, що кожен клієнт унікальний, і у нас є рішення для
              всіх ваших потреб. Наша команда готова допомогти вам вибрати
              оптимальний простір і надати консультації з пакування та
              організації речей.
            </p>
          </div>
          <div className={styles.list_item}>
            <div className={styles.list_heading}>
              <img alt="Point" src={Polygon} />
              <h3>Жодних прихованих платежів</h3>
            </div>
            <p>
              Ми гарантуємо повну прозорість цін. Жодних додаткових або
              прихованих платежів – лише чесні та зручні для Вас умови.
            </p>
          </div>
          <div className={styles.list_item}>
            <div className={styles.list_heading}>
              <img alt="Point" src={Polygon} />
              <h3>Гарантія доступної ціни</h3>
            </div>
            <p>
              Ми надамо Вам місце для зберігання Ваших речей за оптимальною
              ціною. Наш персонал допоможе Вам підібрати оптимальний склад, що
              збереже Ваші гроші.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Popup;
