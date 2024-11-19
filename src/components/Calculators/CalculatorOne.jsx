import styles from "./Calculator_1.module.scss";

import PolygonWhite from "../../assets/calc-white.png";
import PolygonBlue from "../../assets/calc-blue.png";
import PolygonYellow from "../../assets/Polygon 5.svg";
import EmptyPoligon from "../../assets/empty-polygon.svg";
import Icon1 from "../../assets/calculator/car-icon.svg";
import Icon2 from "../../assets/calculator/pickuptruck-icon.svg";
import Icon3 from "../../assets/calculator/minibus-icon.svg";
import Icon4 from "../../assets/calculator/bus-icon.svg";

import I10 from "../../assets/10sqm.png";
import I8 from "../../assets/8sqm.png";
import I6 from "../../assets/6sqm.png";
import I4 from "../../assets/4sqm.png";
import I3 from "../../assets/3sqm.png";
import I25 from "../../assets/2.5sqm.png";
import I2 from "../../assets/2sqm.png";
import I1 from "../../assets/1m.png";

import { useContext, useEffect, useState } from "react";

import { showModal } from "../../utils/showModal";
import { toggleSize, toggleTermin } from "../../utils/calculator_helpers";

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
import Context from "../../hooks/Context";
import useCalculatePrice from "../../hooks/useCalculatePrice";

const cars = [
  { text: "1-2 м", icon: Icon1, size: ["1 м", "2 м"] },
  { text: "3-4 м", icon: Icon2, size: ["3 м", "4 м"] },
  { text: "6-8 м", icon: Icon3, size: ["6 м", "8 м"] },
  { text: "9-12 м", icon: Icon4, size: ["10 м"] },
];

const CalculatorOne = () => {
  const t = useContext(Context);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(fetchIsEmpty());
    dispatch(fetchTerminAndPrice());
    dispatch(fetchSizesAndPrice());
  }, [dispatch]);

  useCalculatePrice(
    clickedSize,
    clickedTermin,
    termins,
    setTotalPrice,
    setClickedTermin
  );

  return (
    <section className={styles.root} id="calc_1">
      <h3>{t("calc_h")}</h3>
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
                  <p>{t("calc_unavailable")}</p>
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
              <h3>{t("ind_calc_square")}</h3>
              <p>{t("ind_calc_auto")}</p>
              <div className={styles.icons_row}>
                {cars.map((car) => {
                  const isClicked = car.size.includes(clickedSize?.size);
                  return (
                    <div
                      style={isEmpty ? { pointerEvents: "none" } : null}
                      key={car.text}
                      className={
                        isClicked
                          ? styles.icons_row_item_clicked
                          : styles.icons_row_item
                      }
                      onClick={() =>
                        toggleSize(
                          car,
                          setClickedSize,
                          clickedSize,
                          sizes,
                          dispatch,
                          setSize
                        )
                      }
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
              <h3>{t("ind_calc_size")}</h3>
              <img
                alt="Mobile"
                src={
                  clickedSize?.size === "8 м"
                    ? I8
                    : clickedSize?.size === "10 м"
                    ? I10
                    : clickedSize?.size === "6 м"
                    ? I6
                    : clickedSize?.size === "4 м"
                    ? I4
                    : clickedSize?.size === "3 м"
                    ? I3
                    : clickedSize?.size === "2.5 м"
                    ? I25
                    : clickedSize?.size === "2 м"
                    ? I2
                    : clickedSize?.size === "1 м"
                    ? I1
                    : I10
                }
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
                        e.target.value === "placeholder" ? null : selectedSize,
                        setClickedSize,
                        clickedSize,
                        sizes,
                        dispatch,
                        setSize
                      );
                    }}
                  >
                    <option selected value="placeholder">
                      {t("calc_size_placeholder_palets")}
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
                            toggleSize(
                              size,
                              setClickedSize,
                              clickedSize,
                              sizes,
                              dispatch,
                              setSize
                            );
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
              <h3>{t("calc_termin")}</h3>
              {termins && termins.length > 0 ? (
                isMobile ? (
                  <select
                    onChange={(e) => {
                      const selectedTermin = termins?.find(
                        (termin) => termin.price === parseFloat(e.target.value)
                      );
                      toggleTermin(
                        e.target.value === "placeholder"
                          ? null
                          : selectedTermin,
                        setClickedTermin,
                        clickedTermin,
                        dispatch,
                        setTermin
                      );
                    }}
                  >
                    <option selected value="placeholder">
                      {t("calc_termin_placeholder")}
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
                            toggleTermin(
                              termin,
                              setClickedTermin,
                              clickedTermin,
                              dispatch,
                              setTermin
                            );
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
            src={
              clickedSize?.size === "8 м"
                ? I8
                : clickedSize?.size === "10 м"
                ? I10
                : clickedSize?.size === "6 м"
                ? I6
                : clickedSize?.size === "4 м"
                ? I4
                : clickedSize?.size === "3 м"
                ? I3
                : clickedSize?.size === "2.5 м"
                ? I25
                : clickedSize?.size === "2 м"
                ? I2
                : clickedSize?.size === "1 м"
                ? I1
                : I10
            }
            className={styles.main_image}
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.button_block}>
          <div className={styles.price_row}>
            <h3>{t("total_price")}</h3>
            <h1>
              {totalPrice} {t("uan")}
            </h1>
          </div>
          <button
            style={isEmpty ? { pointerEvents: "none" } : null}
            onClick={() => {
              dispatch(setType("Індивідуальне зберігання"));
              dispatch(setPrice(totalPrice));
              showModal();
            }}
          >
            {t("order_calc")}
          </button>
        </div>
      </article>
    </section>
  );
};
export default CalculatorOne;
