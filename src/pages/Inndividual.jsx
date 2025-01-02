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
import { useDispatch, useSelector } from "react-redux";
import { fetchIndividualImages } from "../redux/slices/imagesSlice";

const Individual = () => {
  const images = useSelector((state) => state.images.individualImageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIndividualImages());
    window.sessionStorage.setItem("colorCode", "#FA9F19");

    return () => {
      window.sessionStorage.removeItem("colorCode");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
