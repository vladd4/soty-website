import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorThree from "../components/Calculators/CalculatorThree";
import Polygon from "../assets/polygon-ben-blue.svg";
import PolygonSmall from "../assets/polygon-allowed-blue.svg";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import { useEffect } from "react";

import Background from "../assets/remote-main.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchRemoteImages } from "../redux/slices/imagesSlice";

const Remote = () => {
  const images = useSelector((state) => state.images.remoteImageList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRemoteImages());
    window.sessionStorage.setItem("colorCode", "#1999FA");

    return () => {
      window.sessionStorage.removeItem("colorCode");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <WelcomeStorage
        title="remote_h"
        buttonStyle="blue"
        calc_id="calc_3"
        info="remote_info"
        backImage={Background}
      />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorThree />
      <News title="photo_h" images={images} />
      <Partners />
    </>
  );
};
export default Remote;
