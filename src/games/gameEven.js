import readlineSync from "readline-sync";
import { greeting } from "../index.js";

const isEven = (number) => number % 2 === 0;

export const playEvenGame = () => {
  const userName = greeting();
  let correctAnswersCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
