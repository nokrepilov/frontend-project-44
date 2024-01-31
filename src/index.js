import readlineSync from 'readline-sync';

const correctAnswersCount = 3;

const runGame = (gameRulls, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(`${gameRulls}`);

  for (let i = 0; i < correctAnswersCount; i += 1) {
    const [gameQuestion, correctAnswer] = generateRound();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
