import readlineSync from 'readline-sync';

// Функция приветствия
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

// Фукнция ответов
export const answers = (userAnswer, correctAnswer, userName) => {
  if (userAnswer !== correctAnswer) {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
    );
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
