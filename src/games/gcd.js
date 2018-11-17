import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  const findGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return findGcd(num2, num1 % num2);
  };

  return findGcd(max, min);
};

const minNumber = 1;
const maxNumber = 100;

const generateQuestion = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const trueAnswer = getGreatestCommonDivisor(number1, number2);
  return cons(question, trueAnswer);
};

export default () => makeGame(gameInstruction, generateQuestion);
