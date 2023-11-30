import WelcomeStorage from "../components/WelcomeStorage/WelcomeStorage";
import Benefits from "../components/Benefits/Benefits";
import Items from "../components/Items/Items";
import CalculatorTwo from "../components/Calculators/CalculatorTwo";
import Polygon from "../assets/polygon-ben-yellow.svg";
import PolygonSmall from "../assets/Polygon 5.svg";
import News from "../components/News/News";
import Partners from "../components/Partners/Partners";

const Storage = () => {
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
      <News title="фотогалерея" />
      <Partners />
      <News title="новини" />
    </>
  );
};
export default Storage;
