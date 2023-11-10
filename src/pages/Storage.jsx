import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorTwo from "../components/Calculators/CalculatorTwo";
import Polygon from "../assets/polygon-ben-yellow.svg";
import PolygonSmall from "../assets/Polygon 5.svg";
import Loader from "../components/Loader";
import useLoading from "../hooks/useLoading";

const Storage = () => {
  const isLoading = useLoading();
  return (
    <>
      <WelcomeStorage title="Склади" buttonStyle="yellow" calc_id="calc_2" />
      <Benefits polygon={Polygon} />
      <Items polygon={PolygonSmall} />
      <CalculatorTwo />
    </>
  );
};
export default Storage;
