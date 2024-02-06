import styles from "./Benefits.module.scss";

import Park from "../../assets/advantages/parking-icon.png";
import People from "../../assets/advantages/personnel-icon.png";
import Safe from "../../assets/advantages/guard-icon.png";
import Sale from "../../assets/advantages/price-icon.png";
import Ramp from "../../assets/advantages/lift-icon.png";
import Loc from "../../assets/advantages/location.png";
import Kub from "../../assets/advantages/assortment-icon.png";
import Cam from "../../assets/advantages/camera-icon.png";
import Gryz from "../../assets/special-vehicle-icon 1.svg";
import Bud from "../../assets/advantages/building-icon.png";

import useResize from "../../hooks/useResize";
import { useContext } from "react";
import Context from "../../hooks/Context";
import { useDispatch } from "react-redux";
import { setTitle, setInfo } from "../../redux/slices/popupSlice";

const icons = [
  {
    text: "ind_ben_park",
    icon: Park,
  },
  {
    text: "ind_ben_pers",
    icon: People,
  },
  {
    text: "ind_ben_security",
    icon: Safe,
  },
  {
    text: "ind_ben_ramp",
    icon: Ramp,
  },
  {
    text: "ind_ben_location",
    icon: Loc,
  },
  {
    text: "ind_ben_dostyp",
    icon: Kub,
  },
  {
    text: "ind_ben_cam",
    icon: Cam,
  },
  {
    text: "ind_ben_technika",
    icon: Gryz,
  },
  {
    text: "ind_ben_price",
    icon: Sale,
  },
  {
    text: "ind_ben_prostir",
    icon: Bud,
  },
];

const Benefits = ({ polygon }) => {
  const dispatch = useDispatch();
  const handleHover = (title, info) => {
    if (document.querySelector("#popup"))
      document.querySelector("#popup").classList.add("show_popup");
    dispatch(setTitle(title));
    dispatch(setInfo(info));
  };
  const handleHoverRemove = () => {
    if (document.querySelector("#popup"))
      document.querySelector("#popup").classList.remove("show_popup");
  };
  const isMobile = useResize(null);
  const t = useContext(Context);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        {isMobile ? (
          <article className={styles.mobile_block}>
            {icons.map((icon) => {
              return (
                <div
                  key={icon}
                  className={styles.mobile_one_polygon}
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                >
                  <div className={styles.mobile_polygon_text}>
                    <img
                      alt="Icon"
                      src={icon.icon}
                      width="100%"
                      height="100%"
                    />
                    <p>{t(icon.text)}</p>
                  </div>
                </div>
              );
            })}
          </article>
        ) : (
          <>
            <h3>{t("benefits_h")}</h3>
            <article className={styles.polygon_block}>
              <div
                className={styles.one_polygon}
                data-aos="zoom-in-down"
                data-aos-offset="0"
                data-aos-duration="1500"
                onMouseOver={() =>
                  handleHover("ind_ben_security", "ind_ben_security_p")
                }
                onMouseOut={handleHoverRemove}
              >
                <img alt="Polygon" src={polygon} width="100%" height="100%" />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Safe} width="100%" height="100%" />
                  <p>{t("ind_ben_security")}</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                  onMouseOver={() =>
                    handleHover("ind_ben_pers", "ind_ben_pers_p")
                  }
                  onMouseOut={handleHoverRemove}
                >
                  <img alt="Polygon" src={polygon} width="100%" height="100%" />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={People} width="100%" height="100%" />
                    <p>{t("ind_ben_pers")}</p>
                  </div>
                </div>

                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-up"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                  onMouseOver={() =>
                    handleHover("ind_ben_ramp", "ind_ben_ramp_p")
                  }
                  onMouseOut={handleHoverRemove}
                >
                  <img alt="Polygon" src={polygon} width="100%" height="100%" />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Ramp} width="100%" height="100%" />
                    <p>{t("ind_ben_ramp")}</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
                onMouseOver={() =>
                  handleHover("ind_ben_location", "ind_ben_location_p")
                }
                onMouseOut={handleHoverRemove}
              >
                <img alt="Polygon" src={polygon} width="100%" height="100%" />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Loc} width="100%" height="100%" />
                  <p>{t("ind_ben_location")}</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-down"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                  onMouseOver={() =>
                    handleHover("ind_ben_prostir", "ind_ben_prostir_p")
                  }
                  onMouseOut={handleHoverRemove}
                >
                  <img alt="Polygon" src={polygon} width="100%" height="100%" />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Kub} width="100%" height="100%" />
                    <p>{t("ind_ben_prostir")}</p>
                  </div>
                </div>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-up"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                  onMouseOver={() =>
                    handleHover("ind_ben_cam", "ind_ben_cam_p")
                  }
                  onMouseOut={handleHoverRemove}
                >
                  <img alt="Polygon" src={polygon} width="100%" height="100%" />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Cam} width="100%" height="100%" />
                    <p>{t("ind_ben_cam")}</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
                onMouseOver={() =>
                  handleHover("ind_ben_technika", "ind_ben_technika_p")
                }
                onMouseOut={handleHoverRemove}
              >
                <img alt="Polygon" src={polygon} width="100%" height="100%" />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Gryz} width="100%" height="100%" />
                  <p>{t("ind_ben_technika")}</p>
                </div>
              </div>
              <div className={styles.two_polygon}>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-down"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                  onMouseOver={() =>
                    handleHover("ind_ben_price", "ind_ben_price_p")
                  }
                  onMouseOut={handleHoverRemove}
                >
                  <img alt="Polygon" src={polygon} width="100%" height="100%" />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Sale} width="100%" height="100%" />
                    <p>{t("ind_ben_price")}</p>
                  </div>
                </div>
                <div
                  className={styles.two_polygon_parent}
                  data-aos="zoom-in-up"
                  data-aos-offset="0"
                  data-aos-duration="1500"
                  onMouseOver={() =>
                    handleHover("ind_ben_dostyp", "ind_ben_dostyp_p")
                  }
                  onMouseOut={handleHoverRemove}
                >
                  <img alt="Polygon" src={polygon} width="100%" height="100%" />
                  <div className={styles.polygon_text}>
                    <img alt="Icon" src={Bud} width="100%" height="100%" />
                    <p>{t("ind_ben_dostyp")}</p>
                  </div>
                </div>
              </div>
              <div
                className={styles.one_polygon}
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-duration="1500"
                onMouseOver={() =>
                  handleHover("ind_ben_park", "ind_ben_park_p")
                }
                onMouseOut={handleHoverRemove}
              >
                <img alt="Polygon" src={polygon} width="100%" height="100%" />
                <div className={styles.polygon_text}>
                  <img alt="Icon" src={Park} width="100%" height="100%" />
                  <p>{t("ind_ben_park")}</p>
                </div>
              </div>
            </article>
          </>
        )}
      </article>
    </section>
  );
};

export default Benefits;
