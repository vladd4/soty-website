import { useEffect } from "react";

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
        const selectedTermin = clickedTermin || termins?.[0];

        if (selectedTermin) {
          const reductionAmount =
            (selectedTermin.price / 100) * clickedSize.price;
          const result = clickedSize.price - reductionAmount;
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
