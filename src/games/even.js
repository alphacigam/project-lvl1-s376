import { cons } from 'hexlet-pairs';
import makeGame from '..';
import getRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const minNumber = 0;
const maxNumber = 1000;

const generateGameData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => makeGame(gameInstruction, generateGameData);
