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
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operation = getOperation(number1, number2);
  const question = `${number1} ${car(operation)} ${number2}`;
  const trueAnswer = cdr(operation);
  return cons(question, trueAnswer);
};

export default () => makeGame(gameInstruction, generateQuestion);
