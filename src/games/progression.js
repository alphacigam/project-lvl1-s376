import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const minNumber = 1;
const maxNumber = 10;

const missingNumberStartPosition = 1;

const generateProgression = (length) => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const commonDifference = getRandomNumber(minNumber, maxNumber);
  const missingNumberPosition = getRandomNumber(missingNumberStartPosition, length);

  const iter = (number, counter, acc, missingNumber = null) => {
    if (counter === 0) {
      return cons(acc, missingNumber);
    }
    const newNumber = number + commonDifference;
    if (counter === missingNumberPosition) {
      const newAcc = `${acc} ..`;
      return iter(newNumber, counter - 1, newAcc, number);
    }
    const newAcc = `${acc} ${number}`;
    return iter(newNumber, counter - 1, newAcc, missingNumber);
  };

  return iter(firstNumber, length, '');
};

const progressionLength = 10;

const generateQuestion = () => generateProgression(progressionLength);

export default () => makeGame(gameInstruction, generateQuestion);
