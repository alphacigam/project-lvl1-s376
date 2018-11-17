import { cons, car, cdr } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'What is the result of the expression?.';

const getOperation = (number1, number2) => {
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

const minNumber = 0;
const maxNumber = 50;

const generateQuestion = () => {
  const randomNumber1 = getRandomNumber(minNumber, maxNumber);
  const randomNumber2 = getRandomNumber(minNumber, maxNumber);
  const operation = getOperation(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${car(operation)} ${randomNumber2}`;
  const trueAnswer = cdr(operation);
  return cons(question, trueAnswer);
};

export default () => makeGame(gameInstruction, generateQuestion);
