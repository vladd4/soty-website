import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorOne from "../components/Calculators/CalculatorOne";
import Polygon from "../assets/polygon-ben-orange.svg";
import PolygonSmall from "../assets/Polygon 3.svg";
import Loader from "../components/Loader";
import useLoading from "../hooks/useLoading";

const Individual = () => {
  const isLoading = useLoading();
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <WelcomeStorage title="Індивідуальне зберігання" calc_id="calc_1" />
          <Benefits polygon={Polygon} />
          <Items polygon={PolygonSmall} />
          <CalculatorOne />
        </>
      )}
    </>
  );
};
export default Individual;
