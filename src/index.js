import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcomeMessage = 'Welcome to the Brain Games!';
const askPlayerName = () => readlineSync.question('May I have your name? ');
const welcomePlayer = name => `Hello, ${name}!\n`;

const askQuestion = questionContent => `Question: ${questionContent}`;
const getPlayerAnswer = () => readlineSync.question('Your answer: ');

const getWrongMessage = name => (answer1, answer2) => `'${answer1}' is wrong answer ;(. Correct answer was '${answer2}'.\nLet's try again, ${name}!`;
const getTrueMessage = () => 'Correct!';
const getEndGameMessage = name => `Congratulations, ${name}!`;

export const makeGame = (gameInstruction, getGameQuestion, numberOfRounds = 3) => {
  console.log(`${welcomeMessage}\n${gameInstruction}\n`);
  const playerName = askPlayerName();
  console.log(welcomePlayer(playerName));

  const playGameSession = (counterOfRounds) => {
    if (counterOfRounds === 0) {
      console.log(getEndGameMessage(playerName));
      return;
    }
    const gameQuestion = getGameQuestion();
    console.log(askQuestion(car(gameQuestion)));
    const playerAnswer = getPlayerAnswer();
    const trueAnswer = String(cdr(gameQuestion));
    if (playerAnswer !== trueAnswer) {
      console.log(getWrongMessage(playerName)(playerAnswer, trueAnswer));
      return;
    }
    console.log(getTrueMessage());
    playGameSession(counterOfRounds - 1);
  };

  playGameSession(numberOfRounds);
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default () => {
  console.log(welcomeMessage);
  console.log(welcomePlayer(askPlayerName()));
};
