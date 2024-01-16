import readlineSync from "readline-sync";
import { isEven, greeting, answers } from "./index.js";

export const playEvenGame = () => {
  const userName = greeting();
  let correctAnswersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("Your answer: ");
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    const isAnswerCorrect = answers(userAnswer, correctAnswer, userName);

    if (!isAnswerCorrect) {
      return;
    }
    correctAnswersCount += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
