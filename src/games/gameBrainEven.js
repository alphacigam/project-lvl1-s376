import { makeGame, getRandomNumber } from '..';
import { cons } from 'hexlet-pairs';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const getGameQuestion = () => {
  const minNumber = 0;
  const maxNumber = 1000;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  const trueAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(randomNumber, trueAnswer);
};

export default () => makeGame(gameInstruction, getGameQuestion);
