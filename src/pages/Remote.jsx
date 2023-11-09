import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorThree from "../components/Calculators/CalculatorThree";
import Polygon from "../assets/polygon-ben-blue.svg";
import PolygonSmall from "../assets/polygon-allowed-blue.svg";

const Remote = () => {
  return (
    <>
      <WelcomeStorage
        title="Віддалене зберігання"
        buttonStyle="blue"
        calc_id="calc_3"
      />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorThree />
    </>
  );
};
export default Remote;
