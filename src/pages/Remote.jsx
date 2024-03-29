import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorThree from "../components/Calculators/CalculatorThree";
import Polygon from "../assets/polygon-ben-blue.svg";
import PolygonSmall from "../assets/polygon-allowed-blue.svg";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";

const Remote = () => {
  return (
    <>
      <WelcomeStorage
        title="remote_h"
        buttonStyle="blue"
        calc_id="calc_3"
        info="remote_info"
      />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorThree />
      <News title="photo_h" />
      <Partners />
      <News title="news_h" />
    </>
  );
};
export default Remote;
