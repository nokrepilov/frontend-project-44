import readlineSync from "readline-sync";
import { greeting, answers, gcdGame } from "./index.js";

export const playGCDGame = () => {
  const userName = greeting();
  let correctAnswersCount = 0;
  console.log("Find the greatest common divisor of given numbers.");

  //   while (correctAnswersCount > 3) {
  //     const { userAnswer, correctAnswer, number1, number2 } = gcdGame();
  //     const isAnswerCorrect = answers(userAnswer, correctAnswer, userName);
  //     if (!isAnswerCorrect) {
  //       return;
  //     }
  //     correctAnswersCount += 1;
  //   }

  //   console.log(`Congratulations, ${userName}!`);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    // Генерируем два случайных числа
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    // Вычисляем правильный ответ
    const correctAnswer = gcd(number1, number2);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
