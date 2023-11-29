import styles from "./Calculator_1.module.scss";

import Image from "../../assets/8sqm 1.png";
import PolygonWhite from "../../assets/calc-white.svg";
import PolygonBlue from "../../assets/calc-blue.svg";
import PolygonYellow from "../../assets/Polygon 5.svg";
import EmptyPoligon from "../../assets/empty-polygon.svg";
import Icon1 from "../../assets/vehicle-icons 1.png";
import Icon2 from "../../assets/vehicle-icons 2.png";
import Icon3 from "../../assets/vehicle-icons 3.png";
import Icon4 from "../../assets/vehicle-icons 4.png";
import Icon5 from "../../assets/vehicle-icons 5.png";
import MobileCalc from "../../assets/mobile-calc.png";

import { useEffect, useState } from "react";
import { showModal } from "../../utils/showModal";

import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  setSize,
  setTermin,
  setType,
} from "../../redux/slices/modalSlice";
import {
  fetchIsEmpty,
  fetchSizesAndPrice,
  fetchTerminAndPrice,
} from "../../redux/slices/calcSlice";
import useResize from "../../hooks/useResize";

const cars = [
  { text: "1-2 м", icon: Icon1, size: "2 м" },
  { text: "3-4 м", icon: Icon2, size: "3 м" },
  { text: "6-8 м", icon: Icon3, size: "8 м" },
  { text: "9-12 м", icon: Icon4, size: "10 м" },
];

const CalculatorOne = () => {
  const isEmpty = useSelector((state) => state.calculator.isEmptyIndividual);

  const termins = useSelector((state) => state.calculator.terminIndividual);
  const sizes = useSelector((state) => state.calculator.sizesIndividual);

  const [totalPrice, setTotalPrice] = useState(0);

  const [clickedSize, setClickedSize] = useState(
    sizes && sizes.length > 0 ? sizes[3] : null
  );
  const [clickedTermin, setClickedTermin] = useState(
    termins && termins.length > 0 ? termins[2] : null
  );
  const isMobile = useResize(null, null, "calc");
  const dispatch = useDispatch();

  const toggleSize = (car) => {
    if (car !== null) {
      if (car.price) {
        setClickedSize(car === clickedSize ? null : car);
      } else {
        setClickedSize(
          car.size === clickedSize?.size
            ? null
            : sizes.find((size) => size.size === car.size)
        );
      }
      dispatch(setSize(car.size));
    } else {
      setClickedSize(null);
    }
  };
  const toggleTermin = (termin) => {
    if (termin !== null) {
      setClickedTermin(termin === clickedTermin ? null : termin);
      dispatch(setTermin(termin.termin));
    } else {
      setClickedTermin(null);
    }
  };
  useEffect(() => {
    dispatch(fetchIsEmpty());
    dispatch(fetchTerminAndPrice());
    dispatch(fetchSizesAndPrice());
  }, []);

  const calculatePrice = () => {
    if (clickedSize !== null) {
      const selectedTermin = clickedTermin || termins?.[0];

      if (selectedTermin) {
        const reductionAmount =
          (selectedTermin.price / 100) * clickedSize.price;
        const result = clickedSize.price - reductionAmount;
        setTotalPrice(result);
        setClickedTermin(selectedTermin);
      } else {
        setTotalPrice(clickedSize.price);
        setClickedTermin(null);
      }
    } else {
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [clickedSize, clickedTermin]);
  return (
    <section className={styles.root} id="calc_1">
      <h3>калькулятор</h3>
      <article
        className={styles.wrapper}
        data-aos="zoom-in-down"
        data-aos-offset="0"
        data-aos-duration="1000"
      >
        <div className={styles.bottom_polygon}>
          <article className={styles.bottom_first_row}>
            <img alt="Polygon" src={PolygonYellow} width="100%" height="100%" />
          </article>
          <article className={styles.bottom_second_row}>
            <img alt="Polygon" src={PolygonYellow} width="100%" height="100%" />
            <img alt="Polygon" src={PolygonYellow} width="100%" height="100%" />
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
          <div className={styles.size_block}>
            <div className={styles.icon_block}>
              <h3>Площа боксу</h3>
              <p>Виберіть авто для приблизно розрахунку обсягу:</p>
              <div className={styles.icons_row}>
                {cars.map((car) => {
                  const isClicked = car.size === clickedSize?.size;
                  return (
                    <div
                      style={isEmpty ? { pointerEvents: "none" } : null}
                      key={car.text}
                      className={
                        isClicked
                          ? styles.icons_row_item_clicked
                          : styles.icons_row_item
                      }
                      onClick={() => toggleSize(car)}
                    >
                      <img
                        alt="Car"
                        src={car.icon}
                        width="100%"
                        height="100%"
                      />
                      <p>{car.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.sizes}>
              <h3>Або одразу виберіть необхідний розмір боксу:</h3>
              <img
                alt="Mobile"
                src={MobileCalc}
                className={styles.mobile_calc}
              />
              {sizes && sizes.length > 0 ? (
                isMobile ? (
                  <select
                    onChange={(e) => {
                      const selectedSize = sizes?.find(
                        (size) => size.price === parseFloat(e.target.value)
                      );
                      toggleSize(
                        e.target.value === "placeholder" ? null : selectedSize
                      );
                    }}
                  >
                    <option selected value="placeholder">
                      Виберіть розмір боксу
                    </option>
                    {sizes.map((size) => {
                      return (
                        <option
                          key={size.price}
                          selected={
                            size?.size === clickedSize?.size ? true : false
                          }
                          value={size.price}
                        >
                          {size.size}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <div className={styles.size_row}>
                    {sizes.map((size) => {
                      const isClicked = size.size === clickedSize?.size;
                      return (
                        <div
                          key={size.price}
                          style={isEmpty ? { pointerEvents: "none" } : null}
                          className={
                            isClicked
                              ? styles.size_item_clicked
                              : styles.size_item
                          }
                          onClick={() => {
                            toggleSize(size);
                          }}
                        >
                          <img
                            alt="Size"
                            src={isClicked ? PolygonBlue : PolygonWhite}
                            width="100%"
                            height="100%"
                          />
                          <p>{size.size}</p>
                        </div>
                      );
                    })}
                  </div>
                )
              ) : (
                <p>No sizes available</p>
              )}
            </div>
            <div className={styles.termin_block}>
              <h3>Виберіть термін зберігання</h3>
              {termins && termins.length > 0 ? (
                isMobile ? (
                  <select
                    onChange={(e) => {
                      const selectedTermin = termins?.find(
                        (termin) => termin.price === parseFloat(e.target.value)
                      );
                      toggleTermin(
                        e.target.value === "placeholder" ? null : selectedTermin
                      );
                    }}
                  >
                    <option selected value="placeholder">
                      Виберіть термін
                    </option>
                    {termins.map((termin) => (
                      <option
                        key={termin.price}
                        selected={
                          termin?.termin === clickedTermin?.termin
                            ? true
                            : false
                        }
                        value={termin.price}
                      >
                        {termin.termin}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className={styles.termin_row}>
                    {termins.map((termin) => {
                      const isClicked = termin.termin === clickedTermin?.termin;
                      return (
                        <div
                          key={termin.termin}
                          style={isEmpty ? { pointerEvents: "none" } : null}
                          className={
                            isClicked
                              ? styles.termin_item_clicked
                              : styles.termin_item
                          }
                          onClick={() => {
                            toggleTermin(termin);
                          }}
                        >
                          <img
                            alt="Termin"
                            src={isClicked ? PolygonBlue : PolygonWhite}
                            width="100%"
                            height="100%"
                          />
                          <p>{termin.termin}</p>
                        </div>
                      );
                    })}
                  </div>
                )
              ) : (
                <p>No termins available</p>
              )}
            </div>
          </div>
          <img
            alt="Claculator"
            src={Image}
            className={styles.main_image}
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.button_block}>
          <div className={styles.price_row}>
            <h3>Загальна вартість:</h3>
            <h1>{totalPrice} грн</h1>
          </div>
          <button
            style={isEmpty ? { pointerEvents: "none" } : null}
            onClick={() => {
              showModal();
              dispatch(setType("Індивідуальне зберігання"));
              dispatch(setPrice(totalPrice));
              setClickedSize(null);
              setClickedTermin(null);
            }}
          >
            Забронювати
          </button>
        </div>
      </article>
    </section>
  );
};
export default CalculatorOne;
