import readlineSync from "readline-sync";

// Функция для четного числа
export const isEven = (number) => number % 2 === 0;

// Функция приветствия
export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);

  return userName;
};

// Фукнция ответов
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

// Функция калькулятор
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

// Функция для вычисления наибольшего общего делителя (НОД) двух чисел
export const gcdGame = () => {
  // Функция для вычисления наибольшего общего делителя
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  // Функция для генерации случайного числа в заданном диапазоне
  const generateRandomNumber = (min, max) => {
    Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // Функция для запуска игры
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = Number(readlineSync.question("Your answer: "));
  const correctAnswer = gcd(number1, number2);
  return {
    userAnswer,
    correctAnswer,
    number1,
    number2,
    generateRandomNumber,
  };
};
