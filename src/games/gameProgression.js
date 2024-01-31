import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (length, start, step) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i);
  }
  return result;
};

const generateRound = () => {
  const progressionLength = 10;
  const progressionStep = getRandomInRange(1, 5);
  const progressionStart = getRandomInRange(1, 50);

  const progression = generateProgression(
    progressionLength,
    progressionStart,
    progressionStep,
  );
  const hiddenIndex = getRandomInRange(0, 9);
  const correctAnswer = String(progression[hiddenIndex]);

  const progressionForUser = progression;
  progressionForUser[hiddenIndex] = '..';
  const gameQuestion = `${progressionForUser.join(' ')}`;

  return [gameQuestion, correctAnswer];
};

const playProgressionGame = () => {
  const gameRulls = 'What number is missing in the progression?';
  runGame(gameRulls, generateRound);
};

export default playProgressionGame;
