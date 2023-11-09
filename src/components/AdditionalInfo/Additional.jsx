import styles from "./Additional.module.scss";
import PolygonRight from "../../assets/polygon-right.png";
import PolygonLeft from "../../assets/poly-left.png";
import PointOne from "../../assets/Polygon-orange.svg";

const Additional = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <img alt="Polygon" src={PolygonRight} className={styles.poly_right} />
        <img alt="Polygon" src={PolygonLeft} className={styles.poly_left} />
        <div className={styles.header_block}>
          <h3>Зимовий і літній одяг</h3>
          <p>
            Іноді наш гардероб переповнений, а полиці роздягальні здавалося б,
            нескінченно вузькі. Саме тут на допомогу приходить наш сервіс
            зберігання одягу та особистих речей! Чому важливо мати місце для
            зберігання ваших улюблених речей? Давайте розбиратися!
          </p>
        </div>
        <div className={styles.info_block}>
          <h3>Користування нашим сервісом допоможе вам:</h3>
          <div className={styles.info_item}>
            <div className={styles.parent}>
              <img alt="Point" src={PointOne} />
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
              Звільнити простір. Панує цікавий парадокс – чим більше ми
              намагаємося зекономити місце, тим більше речей збирається вдома.
              Наше сховище дозволить вам звільнити цінний простір у вашому
              помешканні, зберігаючи при цьому доступ до улюблених речей.
            </p>
          </div>
          <div className={styles.info_item}>
            <div className={styles.parent}>
              <img alt="Point" src={PointOne} />
              <h3>3</h3>
            </div>
            <p>
              Звільнити простір. Панує цікавий парадокс – чим більше ми
              намагаємося зекономити місце, тим більше речей збирається вдома.
              Наше сховище дозволить вам звільнити цінний простір у вашому
              помешканні, зберігаючи при цьому доступ до улюблених речей.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Additional;
