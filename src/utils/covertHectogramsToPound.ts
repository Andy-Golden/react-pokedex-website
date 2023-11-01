const ONE_HECTOGRAM_TO_POUND = 0.220462;

const covertHectogramsToPounds = (numInHectograms: number): number => {
  const numInPounds = numInHectograms * ONE_HECTOGRAM_TO_POUND;

  return +numInPounds.toFixed(2);
};

export default covertHectogramsToPounds;
