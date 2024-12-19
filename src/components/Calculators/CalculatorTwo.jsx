import styles from "./Calculator_2.module.scss";

import Image from "../../assets/calc-image.jpg";
import PolygonWhite from "../../assets/calc-white.png";
import PolygonBlue from "../../assets/calc-blue.png";
import PolygonYellow from "../../assets/Polygon 3.svg";
import EmptyPoligon from "../../assets/empty-polygon.svg";

import { useContext, useState, useEffect } from "react";

import { showModal } from "../../utils/showModal";

import useResize from "../../hooks/useResize";
import Context from "../../hooks/Context";
import useCalculatePrice from "../../hooks/useCalculatePrice";

import { useDispatch, useSelector } from "react-redux";
import {
  setPrice,
  setSize,
  setTermin,
  setType,
} from "../../redux/slices/modalSlice";
import {
  fetchIsEmptyStorage,
  fetchSizesAndPriceStorage,
  fetchTerminAndPrice,
} from "../../redux/slices/calcSlice";
import { toggleSize, toggleTermin } from "../../utils/calculator_helpers";

const CalculatorTwo = () => {
  const t = useContext(Context);
  const dispatch = useDispatch();
  const isEmpty = useSelector((state) => state.calculator.isEmptyStorage);
  const termins = useSelector((state) => state.calculator.terminIndividual);
  const sizes = useSelector((state) => state.calculator.sizesStorage);

  const [totalPrice, setTotalPrice] = useState(0);
  const [clickedSize, setClickedSize] = useState(
    sizes && sizes.length > 0 ? sizes[3] : null
  );
  const [clickedTermin, setClickedTermin] = useState(
    termins && termins.length > 0 ? termins[2] : null
  );

  const isMobile = useResize(null, null, "calc");

  useEffect(() => {
    dispatch(fetchIsEmptyStorage());
    dispatch(fetchTerminAndPrice());
    dispatch(fetchSizesAndPriceStorage());
  }, [dispatch]);

  useCalculatePrice(
    clickedSize,
    clickedTermin,
    termins,
    setTotalPrice,
    setClickedTermin
  );
  return (
    <section className={styles.root} id="calc_2">
      <h3>{t("calc_h")}</h3>
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
                  <p>{t("calc_unavailable")}</p>
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
                    <p>{t("calc_unavailable")}</p>
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
              <h3>{t("calc_sklad")}</h3>
              <img
                alt="Calculator"
                src={Image}
                className={styles.main_image_mobile}
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
                      {t("calc_size_placeholder_storage")}
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
                          <p>
                            {size.size}
                            <sup>2</sup>
                          </p>
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
                          <p>
                            {size.size}
                            <sup>2</sup>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )
              ) : null}
            </div>
            <div className={styles.termin_block}>
              <h3>{t("calc_termin")}</h3>
              {termins && termins.length > 0 ? (
                isMobile ? (
                  <select
                    onChange={(e) => {
                      const selectedTermin = termins?.find(
                        (termin) => termin === e.target.value
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
                        key={termin}
                        selected={termin === clickedTermin ? true : false}
                        value={termin}
                      >
                        {termin}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className={styles.termin_row}>
                    {termins.map((termin) => {
                      const isClicked = termin === clickedTermin;
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
                          <p>{termin}</p>
                        </div>
                      );
                    })}
                  </div>
                )
              ) : null}
            </div>
          </div>
          <img alt="Claculator" src={Image} className={styles.main_image} />
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
              dispatch(setType("Склади"));
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
export default CalculatorTwo;
