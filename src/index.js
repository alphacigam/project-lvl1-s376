import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfRounds = 3;

const makeGame = (gameInstruction, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameInstruction}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const playGameSession = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const gameData = generateGameData();
    const question = car(gameData);
    const trueAnswer = String(cdr(gameData));
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== trueAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\n`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    playGameSession(roundsCount - 1);
  };

  playGameSession(numberOfRounds);
};

export default makeGame;
