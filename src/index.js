import readlineSync from "readline-sync";

export const isEven = (number) => number % 2 === 0;

export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const answers = (userAnswer, correctAnswer, userName) => {
  if (userAnswer !== correctAnswer) {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log("Correct!");
  return true;
};

export const calculations = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${num1} ${operator} ${num2}`;
  console.log(`Question: ${expression}`);
  const userAnswer = Number(readlineSync.question("Your answer: "));

  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return {
    userAnswer,
    correctAnswer,
  };
};
