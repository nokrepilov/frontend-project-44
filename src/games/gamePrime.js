import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const gameQuestion = `${getRandomInRange(1, 50)}`;
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const playPrimeGame = () => {
  const gameRulls = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(gameRulls, generateRound);
};

export default playPrimeGame;
