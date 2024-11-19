import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorTwo from "../components/Calculators/CalculatorTwo";
import Polygon from "../assets/polygon-ben-yellow.svg";
import PolygonSmall from "../assets/Polygon 5.svg";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import { useEffect } from "react";

const Storage = () => {
  useEffect(() => {
    window.sessionStorage.setItem("colorCode", "#FABA19");

    return () => {
      window.sessionStorage.removeItem("colorCode");
    };
  }, []);
  return (
    <>
      <WelcomeStorage
        title="storage_h"
        buttonStyle="yellow"
        calc_id="calc_2"
        info="storage_info"
        p2="storage_info_p2"
      />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorTwo />
      <News title="photo_h" />
      <Partners />
    </>
  );
};
export default Storage;
