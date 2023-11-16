import styles from "./Popup.module.scss";
import Polygon from "../../assets/small-poly.svg";

const items = [
  {
    heading: "Гнучкі тарифи",
    text: "Залежно від того, чи вам потрібно зберігати речі лише на кілька днів чи на тривалий термін, наші фахівці підберуть для Вас тарифи, які допоможуть вам зекономити гроші.",
  },
  {
    heading: "Персоналізований підхід",
    text: " Ми розуміємо, що кожен клієнт унікальний, і у нас є рішення для всіх ваших потреб. Наша команда готова допомогти вам вибратb оптимальний простір і надати консультації з пакування та організації речей.",
  },
  {
    heading: "Жодних прихованих платежів",
    text: " Ми гарантуємо повну прозорість цін. Жодних додаткових або прихованих платежів – лише чесні та зручні для Вас умови.",
  },
  {
    heading: "Гарантія доступної ціни",
    text: " Ми надамо Вам місце для зберігання Ваших речей за оптимальною ціною. Наш персонал допоможе Вам підібрати оптимальний склад, що збереже Ваші гроші.",
  },
];

const Popup = () => {
  return (
    <section className={styles.root} id="popup">
      <article className={styles.wrapper}>
        <h4>
          Наш сервіс допоможе Вам організувати зберігання Вашого майна за
          оптимальною ціною:
        </h4>
        <div className={styles.list_block}>
          {items.map((item) => {
            return (
              <div key={item.heading} className={styles.list_item}>
                <div className={styles.list_heading}>
                  <img alt="Point" src={Polygon} width="100%" height="100%" />
                  <h3>{item.heading}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Popup;
