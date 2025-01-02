import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorOne from "../components/Calculators/CalculatorOne";
import Polygon from "../assets/polygon-ben-orange.svg";
import PolygonSmall from "../assets/Polygon 3.svg";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import { useEffect } from "react";

import Background from "../assets/individul-main.webp";
import { useSelector } from "react-redux";

const Individual = () => {
  const images = useSelector((state) => state.images.individualImageList);

  useEffect(() => {
    window.sessionStorage.setItem("colorCode", "#FA9F19");

    return () => {
      window.sessionStorage.removeItem("colorCode");
    };
  }, []);

  return (
    <>
      <WelcomeStorage
        title="individual_h"
        info="individual_info"
        calc_id="calc_1"
        backImage={Background}
      />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorOne />
      <News title="photo_h" images={images} />
      <Partners />
    </>
  );
};
export default Individual;
