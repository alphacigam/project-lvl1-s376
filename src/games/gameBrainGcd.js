import { makeGame, getRandomNumber } from '..';
import { cons } from 'hexlet-pairs';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  const smallerNumber = number1 > number2 ? number2 : number1;
  const biggerNumber = number1 > number2 ? number1 : number2;

  const findGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return findGcd(num2, num1 % num2);
  };

  return findGcd(biggerNumber, smallerNumber);
};

const getGameQuestion = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const randomNumber1 = getRandomNumber(minNumber, maxNumber);
  const randomNumber2 = getRandomNumber(minNumber, maxNumber);
  const questionContent = `${randomNumber1} ${randomNumber2}`;
  const trueAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return cons(questionContent, trueAnswer);
};

export default () => makeGame(gameInstruction, getGameQuestion);
