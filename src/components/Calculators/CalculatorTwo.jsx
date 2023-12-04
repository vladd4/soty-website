import styles from "./Calculator_2.module.scss";
import Image from "../../assets/calc-image.jpg";
import PolygonWhite from "../../assets/calc-white.svg";
import PolygonBlue from "../../assets/calc-blue.svg";
import PolygonYellow from "../../assets/Polygon 3.svg";
import EmptyPoligon from "../../assets/empty-polygon.svg";
import { useContext, useState, useEffect } from "react";
import { showModal } from "../../utils/showModal";
import useResize from "../../hooks/useResize";
import Context from "../../hooks/Context";

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

const CalculatorTwo = () => {
  const t = useContext(Context);

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIsEmptyStorage());
    dispatch(fetchTerminAndPrice());
    dispatch(fetchSizesAndPriceStorage());
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
                alt="Claculator"
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
                        e.target.value === "placeholder" ? null : selectedSize
                      );
                    }}
                  >
                    <option selected value="placeholder">
                      Виберіть розмір складу
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
              <h3>{t("calc_termin")}</h3>
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
              showModal();
              dispatch(setType("Склади"));
              dispatch(setPrice(totalPrice));
              setClickedSize(null);
              setClickedTermin(null);
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
