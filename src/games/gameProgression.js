import readlineSync from "readline-sync";
import { greeting } from "../index.js";

const generateProgression = (length) => {
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;
  const progression = [start];
  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + diff);
  }
  return progression;
};

const hideNumber = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = "..";
  return { progression, hiddenValue };
};

export const playProgressionGame = () => {
  const userName = greeting();
  console.log("What number is missing in the progression?");

  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const length = Math.floor(Math.random() * 6) + 5;
    const { progression, hiddenValue } = hideNumber(
      generateProgression(length)
    );
    console.log(`Question: ${progression.join(" ")}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (parseInt(userAnswer, 10) === hiddenValue) {
      console.log("Correct!");
      score += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (score === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
