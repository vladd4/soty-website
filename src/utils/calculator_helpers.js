export const toggleSize = (
  car,
  setClickedSize,
  clickedSize,
  sizes,
  dispatch,
  setSize
) => {
  if (car !== null) {
    if (car.price) {
      setClickedSize(car === clickedSize ? null : car);
    } else {
      setClickedSize(
        car.size === clickedSize?.size
          ? null
          : sizes.find((size) => size.size === car.size)
      );
    }
    dispatch(setSize(car.size));
  } else {
    setClickedSize(null);
  }
};

export const toggleTermin = (
  termin,
  setClickedTermin,
  clickedTermin,
  dispatch,
  setTermin
) => {
  if (termin !== null) {
    setClickedTermin(termin === clickedTermin ? null : termin);
    dispatch(setTermin(termin.termin));
  } else {
    setClickedTermin(null);
  }
};
