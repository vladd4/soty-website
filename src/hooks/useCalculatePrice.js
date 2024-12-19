import { useEffect } from "react";
import { calc_termins } from "../utils/constants";

const useCalculatePrice = (
  clickedSize,
  clickedTermin,
  termins,
  setTotalPrice,
  setClickedTermin
) => {
  useEffect(() => {
    const calculatePrice = () => {
      if (clickedSize !== null) {
        const selectedTermin = clickedTermin || termins[0];

        if (selectedTermin) {
          const selectedTerminAmount = calc_termins.find(
            (item) => item.label === selectedTermin
          );
          const result = clickedSize.price * selectedTerminAmount.value;
          setTotalPrice(result);
          setClickedTermin(selectedTermin);
        } else {
          setTotalPrice(clickedSize.price);
          setClickedTermin(null);
        }
      } else {
        setTotalPrice(0);
      }
    };

    calculatePrice();
  }, [clickedSize, clickedTermin, termins, setTotalPrice, setClickedTermin]);
};

export default useCalculatePrice;
