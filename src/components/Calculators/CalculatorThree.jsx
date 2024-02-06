import styles from "./Calculator_3.module.scss";
import Image from "../../assets/pallete 1.png";
import PolygonWhite from "../../assets/calc-white.png";
import PolygonYellow from "../../assets/Polygon 5.svg";
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
  fetchIsEmptyRemote,
  fetchSizesAndPriceRemote,
  fetchTerminAndPrice,
} from "../../redux/slices/calcSlice";

const CalculatorThree = () => {
  const t = useContext(Context);
  const [selectedInput, setSelectedInput] = useState(5);
  const isEmpty = useSelector((state) => state.calculator.isEmptyRemote);
  const termins = useSelector((state) => state.calculator.terminIndividual);
  const sizes = useSelector((state) => state.calculator.sizesRemote);
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
    dispatch(fetchIsEmptyRemote());
    dispatch(fetchTerminAndPrice());
    dispatch(fetchSizesAndPriceRemote());
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
    <section className={styles.root} id="calc_3">
      <h3>{t("calc_h")}</h3>
      <article
        className={styles.wrapper}
        data-aos="zoom-in-down"
        data-aos-offset="0"
        data-aos-duration="1000"
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
          <div className={styles.palet_block}>
            <div className={styles.palets}>
              <h3>{t("calc_pilets")}</h3>
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
                      Виберіть кількість палет
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
                  <div className={styles.input_block}>
                    <div className={styles.input_item}>
                      <img alt="Palet" src={PolygonWhite} />
                      <p>{selectedInput}</p>
                    </div>
                    <input
                      type="range"
                      id="palets"
                      style={isEmpty ? { pointerEvents: "none" } : null}
                      name="palets"
                      value={selectedInput}
                      onChange={(e) => {
                        const selectedSizeElement = sizes?.find(
                          (sizeObj) => sizeObj.size === e.target.value
                        );
                        setSelectedInput(e.target.value);
                        setClickedSize(selectedSizeElement);
                        dispatch(setSize(selectedSizeElement.size));
                      }}
                      min={sizes[0]?.size}
                      max={sizes[sizes.length - 1]?.size}
                      step={1}
                    />
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
                            src={isClicked ? PolygonYellow : PolygonWhite}
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
              dispatch(setType("Віддалене зберігання"));
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
export default CalculatorThree;
