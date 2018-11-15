import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';

export const welcomeMessage = 'Welcome to the Brain Games!';
export const askPlayerName = () => readlineSync.question('May I have your name? ');
export const welcomePlayer = name => `Hello, ${name}!`;

export const askQuestion = value => `Question: ${value}`;
export const getPlayerAnswer = () => readlineSync.question('Your answer: ');
export const getWrongMessage = name => (anw1, anw2) => `${anw1}' is wrong answer ;(. Correct answer was '${anw2}'.\nLet's try again, ${name}!`;
export const getTrueMessage = () => 'Correct!';
export const getEndGameMessage = name => `Congratulations, ${name}!`;

export const numberOfQuestions = 3;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = number => number % 2 === 0;

export const getOperation = (number1, number2) => {
  switch (getRandomNumber(1, 3)) {
    case 1:
      return cons('+', number1 + number2);
    case 2:
      return cons('-', number1 - number2);
    case 3:
      return cons('*', number1 * number2);
    default:
      return null;
  }
};

export default () => {
  console.log(welcomeMessage);
  console.log(welcomePlayer(askPlayerName()));
};
