const ONE_DECIMETER_TO_FEET = 4;

const covertDecimetersToFeet = (numInDecimeter: number): number => {
  const numInFeet = numInDecimeter * ONE_DECIMETER_TO_FEET;

  return +numInFeet.toFixed(2);
};

export default covertDecimetersToFeet;
