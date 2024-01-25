import readlineSync from 'readline-sync';
import { greeting } from '../index.js';

const playGCDGame = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    // Генерируем два случайных числа
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // Вычисляем правильный ответ
    const correctAnswer = gcd(number1, number2);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGCDGame;