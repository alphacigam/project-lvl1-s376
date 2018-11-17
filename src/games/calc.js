import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'What is the result of the expression?';

const minNumber = 0;
const maxNumber = 50;

const generateGameData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const numberOfOperation = getRandomNumber(1, 3);
  switch (numberOfOperation) {
    case 1:
      return cons(`${number1} + ${number2}`, number1 + number2);
    case 2:
      return cons(`${number1} - ${number2}`, number1 - number2);
    case 3:
      return cons(`${number1} * ${number2}`, number1 * number2);
    default:
      return null;
  }
};

export default () => makeGame(gameInstruction, generateGameData);
