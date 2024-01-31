import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const getRandomOpetator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect`);
  }
};

const generateRound = () => {
  const value1 = getRandomInRange(0, 10);
  const value2 = getRandomInRange(0, 10);
  const operation = getRandomOpetator();

  const gameQuestion = `${value1} ${operation} ${value2}`;

  const correctAnswer = `${calculation(value1, value2, operation)}`;

  return [gameQuestion, correctAnswer];
};

const playCalcGame = () => {
  const gameRulls = 'What is the result of the expression?';
  runGame(gameRulls, generateRound);
};

export default playCalcGame;
