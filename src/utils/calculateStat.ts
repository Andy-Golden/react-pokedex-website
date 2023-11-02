const calculateStat = (baseStat: number): number => {
  return Math.round((baseStat / 244) * 15);
};

export default calculateStat;
