import readlineSync from "readline-sync";
import { greeting, answers, calculations } from "./index.js";

export const playCalcGame = () => {
  const userName = greeting();
  let correctAnswersCount = 0;
  console.log("What is the result of the expression?");

  while (correctAnswersCount < 3) {
    const { userAnswer, correctAnswer } = calculations();

    const isAnswerCorrect = answers(userAnswer, correctAnswer, userName);

    if (!isAnswerCorrect) {
      return;
    }
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
