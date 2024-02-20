import styles from "./Benefits.module.scss";
import OnePolygon from "./OnePolygon";

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
import TwoPolygons from "./TwoPolygons";

const DesktopBlock = ({ t, polygon, handleHover, handleHoverRemove }) => {
  return (
    <>
      <h3>{t("benefits_h")}</h3>
      <article className={styles.polygon_block}>
        <OnePolygon
          polygon={polygon}
          handleHover={() =>
            handleHover("ind_ben_security", "ind_ben_security_p")
          }
          handleHoverRemove={handleHoverRemove}
          label="ind_ben_security"
          icon={Safe}
          t={t}
        />
        <TwoPolygons
          t={t}
          handleHoverRemove={handleHoverRemove}
          handleHover_1={() => handleHover("ind_ben_pers", "ind_ben_pers_p")}
          handleHover_2={() => handleHover("ind_ben_ramp", "ind_ben_ramp_p")}
          icons={[People, Ramp]}
          labels={["ind_ben_pers", "ind_ben_ramp"]}
          polygon={polygon}
        />
        <OnePolygon
          polygon={polygon}
          handleHover={() =>
            handleHover("ind_ben_location", "ind_ben_location_p")
          }
          handleHoverRemove={handleHoverRemove}
          label="ind_ben_location"
          icon={Loc}
          t={t}
        />
        <TwoPolygons
          t={t}
          handleHoverRemove={handleHoverRemove}
          handleHover_1={() =>
            handleHover("ind_ben_prostir", "ind_ben_prostir_p")
          }
          handleHover_2={() => handleHover("ind_ben_cam", "ind_ben_cam_p")}
          icons={[Kub, Cam]}
          labels={["ind_ben_prostir", "ind_ben_cam"]}
          polygon={polygon}
        />
        <OnePolygon
          polygon={polygon}
          handleHover={() =>
            handleHover("ind_ben_technika", "ind_ben_technika_p")
          }
          handleHoverRemove={handleHoverRemove}
          label="ind_ben_technika"
          icon={Gryz}
          t={t}
        />
        <TwoPolygons
          t={t}
          handleHoverRemove={handleHoverRemove}
          handleHover_1={() => handleHover("ind_ben_price", "ind_ben_price_p")}
          handleHover_2={() =>
            handleHover("ind_ben_dostyp", "ind_ben_dostyp_p")
          }
          icons={[Sale, Bud]}
          labels={["ind_ben_price", "ind_ben_dostyp"]}
          polygon={polygon}
        />
        <OnePolygon
          polygon={polygon}
          handleHover={() => handleHover("ind_ben_park", "ind_ben_park_p")}
          handleHoverRemove={handleHoverRemove}
          label="ind_ben_park"
          icon={Park}
          t={t}
        />
      </article>
    </>
  );
};

export default DesktopBlock;
