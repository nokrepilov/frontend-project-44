import readlineSync from "readline-sync";
import { greeting } from "./index.js";

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const playPrimeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");

    const correctAnswer = isPrime(number) ? "yes" : "no";
    if (userAnswer === correctAnswer) {
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
