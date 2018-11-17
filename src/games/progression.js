import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const minNumber = 1;
const maxNumber = 20;

const progressionLength = 10;
const missingElementStartPosition = 1;

const generateGameData = () => {
  const firstElement = getRandomNumber(minNumber, maxNumber);
  const commonDifference = getRandomNumber(minNumber, maxNumber);
  const missingElementPosition = getRandomNumber(missingElementStartPosition, progressionLength);

  const iter = (counter, acc, missingElement) => {
    if (counter === 0) {
      return cons(acc, missingElement);
    }
    const currentElement = firstElement + commonDifference * counter;
    if (counter === missingElementPosition) {
      const newAcc = `.. ${acc}`;
      return iter(counter - 1, newAcc, currentElement);
    }
    const newAcc = `${currentElement} ${acc}`;
    return iter(counter - 1, newAcc, missingElement);
  };

  return iter(progressionLength, '', null);
};

export default () => makeGame(gameInstruction, generateGameData);
