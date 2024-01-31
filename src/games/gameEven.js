import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const gameQuestion = `${getRandomInRange(1, 100)}`;
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const playEvenGame = () => {
  const gameRulls = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(gameRulls, generateRound);
};

export default playEvenGame;
