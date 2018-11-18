import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const checkNumber = (counter) => {
    if (counter > number / 2) {
      return true;
    }
    if (number % counter === 0) {
      return false;
    }
    return checkNumber(counter + 1);
  };

  return checkNumber(2);
};

const minNumber = 0;
const maxNumber = 1000;

const generateGameData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => makeGame(gameInstruction, generateGameData);
