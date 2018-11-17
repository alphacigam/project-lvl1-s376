import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const makeGame = (gameInstruction, generateQuestion, numberOfRounds = 3) => {
  console.log(`Welcome to the Brain Games!\n${gameInstruction}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const playGameSession = (roundsCount) => {
    if (roundsCount === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const gameQuestion = generateQuestion();
    console.log(`Question: ${car(gameQuestion)}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = String(cdr(gameQuestion));
    if (playerAnswer !== trueAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
    playGameSession(roundsCount - 1);
  };

  playGameSession(numberOfRounds);
};

export default () => {
  console.log('Welcome to the Brain Games!\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
};
