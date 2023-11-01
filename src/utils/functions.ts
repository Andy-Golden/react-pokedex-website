export const getRandomInt = (min: number, max: number): number => {
  if (max < min) {
    const temp: number = max;
    max = min;
    min = temp;
  }
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  return randomNum;
};
