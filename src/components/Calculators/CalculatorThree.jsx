import styles from "./Calculator_3.module.scss";
import Image from "../../assets/pallete 1.png";
import PolygonWhite from "../../assets/calc-white.svg";
import PolygonYellow from "../../assets/Polygon 5.svg";
import EmptyPoligon from "../../assets/empty-polygon.svg";
import { useState } from "react";
import { showModal } from "../../utils/showModal";
import useResize from "../../hooks/useResize";
const palets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const termins = [
  "1 тиж",
  "1 міс",
  "2 міс",
  "3 міс",
  "4 міс",
  "5 міс",
  "6 міс",
  "12+ міс",
];

const CalculatorThree = () => {
  const [selectedInput, setSelectedInput] = useState(5);
  const [clickedTermin, setClickedTermin] = useState(null);
  const isEmpty = false;
  const isMobile = useResize(null);

  const toggleTermin = (termin) => {
    setClickedTermin(termin === clickedTermin ? null : termin);
  };
  return (
    <section className={styles.root} id="calc_3">
      <h3>калькулятор</h3>
      <article className={styles.wrapper}>
        <div className={styles.bottom_polygon}>
          <article className={styles.bottom_first_row}>
            <img alt="Polygon" src={PolygonYellow} />
          </article>
          <article className={styles.bottom_second_row}>
            <img alt="Polygon" src={PolygonYellow} />
            <img alt="Polygon" src={PolygonYellow} />
          </article>
        </div>
        <div className={styles.top_polygon}>
          <article className={styles.top_polygon_wrapper}>
            <div>
              <img alt="Polygon" src={PolygonYellow} className={styles.img_1} />
              {isEmpty ? (
                <div className={styles.empty}>
                  <img alt="Polygon" src={EmptyPoligon} />
                  <p>Всі склади зайняті</p>
                </div>
              ) : (
                <img
                  alt="Polygon"
                  src={PolygonYellow}
                  className={styles.img_2}
                />
              )}

              <img alt="Polygon" src={PolygonYellow} className={styles.img_3} />
            </div>
          </article>
        </div>
        <div className={styles.top_block}>
          <div className={styles.palet_block}>
            <div className={styles.palets}>
              <h3>Виберіть кількість пілетомісць:</h3>
              <img
                alt="Claculator"
                src={Image}
                className={styles.main_image_mobile}
              />
              {isMobile ? (
                <select>
                  {palets
                    ? palets.map((palet) => {
                        return <option value={palet}>{palet}</option>;
                      })
                    : null}
                </select>
              ) : (
                <div className={styles.input_block}>
                  <div className={styles.input_item}>
                    <img alt="Palet" src={PolygonWhite} />
                    <p>{selectedInput}</p>
                  </div>
                  <input
                    type="range"
                    id="palets"
                    name="palets"
                    value={selectedInput}
                    onChange={(e) => setSelectedInput(e.target.value)}
                    min="0"
                    max="10"
                  />
                </div>
              )}
            </div>
            <div className={styles.termin_block}>
              <h3>Виберіть термін зберігання</h3>
              {isMobile ? (
                <select>
                  {termins
                    ? termins.map((termin) => {
                        return <option value={termin}>{termin}</option>;
                      })
                    : null}
                </select>
              ) : (
                <div className={styles.termin_row}>
                  {termins
                    ? termins.map((termin) => {
                        const isClicked = termin === clickedTermin;
                        return (
                          <div
                            key={termin}
                            style={isEmpty ? { pointerEvents: "none" } : null}
                            className={
                              isClicked
                                ? styles.termin_item_clicked
                                : styles.termin_item
                            }
                            onClick={() => toggleTermin(termin)}
                          >
                            <img
                              alt="Termin"
                              src={isClicked ? PolygonYellow : PolygonWhite}
                            />
                            <p>{termin}</p>
                          </div>
                        );
                      })
                    : null}
                </div>
              )}
            </div>
          </div>
          <img alt="Claculator" src={Image} className={styles.main_image} />
        </div>
        <div className={styles.button_block}>
          <div className={styles.price_row}>
            <h3>Загальна вартість:</h3>
            <h1>6000 грн</h1>
          </div>
          <button onClick={showModal}>Забронювати</button>
        </div>
      </article>
    </section>
  );
};
export default CalculatorThree;
