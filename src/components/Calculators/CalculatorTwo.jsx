import styles from "./Calculator_2.module.scss";
import Image from "../../assets/calc-image.jpg";
import PolygonWhite from "../../assets/calc-white.svg";
import PolygonBlue from "../../assets/calc-blue.svg";
import PolygonYellow from "../../assets/Polygon 3.svg";
import EmptyPoligon from "../../assets/empty-polygon.svg";
import { useState } from "react";
import { showModal } from "../../utils/showModal";
import useResize from "../../hooks/useResize";

const sizes = [
  "28 м",
  "48 м",
  "52 м",
  "72 м",
  "86 м",
  "108 м",
  "122 м",
  "144 м",
  "170 м",
  "180 м",
  "183 м",
  "216 м",
  "252 м",
  "270 м",
  "287 м",
  "288 м",
  "296 м",
  "298 м",
  "304 м",
  "367 м",
  "396 м",
  "398 м",
  "432 м",
];

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

const CalculatorTwo = () => {
  const [clickedSize, setClickedSize] = useState(null);
  const [clickedTermin, setClickedTermin] = useState(null);
  const isEmpty = true;
  const isMobile = useResize(null);
  const toggleSize = (size) => {
    setClickedSize(size === clickedSize ? null : size);
  };

  const toggleTermin = (termin) => {
    setClickedTermin(termin === clickedTermin ? null : termin);
  };
  return (
    <section className={styles.root} id="calc_2">
      <h3>калькулятор</h3>
      <article
        className={styles.wrapper}
        data-aos="zoom-in-down"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <div className={styles.bottom_polygon}>
          <article className={styles.bottom_first_row}>
            <img alt="Polygon" src={PolygonYellow} />
          </article>
          <article className={styles.bottom_second_row}>
            <img alt="Polygon" src={PolygonYellow} />
            <img alt="Polygon" src={PolygonYellow} />
          </article>
        </div>
        {isMobile && isEmpty ? (
          <div className={styles.top_polygon}>
            <article className={styles.top_polygon_wrapper}>
              <div>
                <div className={styles.empty}>
                  <img alt="Polygon" src={EmptyPoligon} />
                  <p>Всі склади зайняті</p>
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div className={styles.top_polygon}>
            <article className={styles.top_polygon_wrapper}>
              <div>
                <img
                  alt="Polygon"
                  src={PolygonYellow}
                  className={styles.img_1}
                />
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

                <img
                  alt="Polygon"
                  src={PolygonYellow}
                  className={styles.img_3}
                />
              </div>
            </article>
          </div>
        )}
        <div className={styles.top_block}>
          <div className={styles.size_block}>
            <div className={styles.sizes}>
              <h3>Виберіть розмір складу</h3>
              <img
                alt="Claculator"
                src={Image}
                className={styles.main_image_mobile}
              />
              {isMobile ? (
                <select>
                  {sizes
                    ? sizes.map((size) => {
                        return (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        );
                      })
                    : null}
                </select>
              ) : (
                <div className={styles.size_row}>
                  {sizes.map((size) => {
                    const isClicked = size === clickedSize;
                    return (
                      <div
                        key={size}
                        className={
                          isClicked
                            ? styles.size_item_clicked
                            : styles.size_item
                        }
                        onClick={() => toggleSize(size)}
                      >
                        <img
                          alt="Size"
                          src={isClicked ? PolygonBlue : PolygonWhite}
                        />
                        <p>{size}</p>
                      </div>
                    );
                  })}
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
                  {termins.map((termin) => {
                    const isClicked = termin === clickedTermin;
                    return (
                      <div
                        key={termin}
                        className={
                          isClicked
                            ? styles.termin_item_clicked
                            : styles.termin_item
                        }
                        onClick={() => toggleTermin(termin)}
                      >
                        <img
                          alt="Termin"
                          src={isClicked ? PolygonBlue : PolygonWhite}
                        />
                        <p>{termin}</p>
                      </div>
                    );
                  })}
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
export default CalculatorTwo;
