import readlineSync from 'readline-sync';
import { greeting } from '../index.js';

const playCalcGame = () => {
  const userName = greeting();
  let correctAnswersCount = 0;
  console.log('What is the result of the expression?');

  while (correctAnswersCount < 3) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        break;
    }

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );

      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
export default playCalcGame;
