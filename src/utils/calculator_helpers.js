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
        car.size.some((carSize) =>
          sizes.some((size) => size.size === carSize && size.quantity >= 0)
        )
          ? sizes.find((size) => car.size.includes(size.size))
          : null
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
    dispatch(setTermin(termin));
  } else {
    setClickedTermin(null);
  }
};
