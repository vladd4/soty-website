import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorOne from "../components/Calculators/CalculatorOne";
import Polygon from "../assets/polygon-ben-orange.svg";
import PolygonSmall from "../assets/Polygon 3.svg";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";
import AboutUs from "../components/AboutUs/About";

const Individual = () => {
  return (
    <>
      <WelcomeStorage title="Індивідуальне зберігання" calc_id="calc_1" />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorOne />
      <AboutUs />
      <News title="фотогалерея" />
      <Partners />
      <News title="новини" />
    </>
  );
};
export default Individual;
