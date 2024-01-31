const getRandomInRange = (min, max) => {
  const number = Math.floor(min + Math.random() * (max - min + 1));
  return number;
};

export default getRandomInRange;
