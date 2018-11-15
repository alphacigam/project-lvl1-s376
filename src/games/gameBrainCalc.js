import { car, cdr } from 'hexlet-pairs';
import {
  welcomeMessage, askPlayerName, welcomePlayer,
  askQuestion, getPlayerAnswer, getWrongMessage, getTrueMessage, getEndGameMessage,
  numberOfQuestions, getRandomNumber, getOperation,
} from '..';

export default () => {
  const instruction = 'What is the result of the expression?';
  console.log(`${welcomeMessage}\n${instruction}\n`);
  const playerName = askPlayerName();
  console.log(welcomePlayer(playerName));

  const makeGame = (counter) => {
    if (counter === 0) {
      return console.log(getEndGameMessage(playerName));
    }
    const min = 0;
    const max = 50;
    const number1 = getRandomNumber(min, max);
    const number2 = getRandomNumber(min, max);
    const operation = getOperation(number1, number2);
    const questionValue = `${number1} ${car(operation)} ${number2}`;
    console.log(askQuestion(questionValue));
    const trueAnswer = String(cdr(operation));
    const playerAnswer = getPlayerAnswer();
    if (playerAnswer !== trueAnswer) {
      return console.log(getWrongMessage(playerName)(playerAnswer, trueAnswer));
    }
    console.log(getTrueMessage());
    return makeGame(counter - 1);
  };

  return makeGame(numberOfQuestions);
};
