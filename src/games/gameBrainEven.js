import {
  welcomeMessage, askPlayerName, welcomePlayer,
  askQuestion, getPlayerAnswer, getWrongMessage, getTrueMessage, getEndGameMessage,
  numberOfQuestions, getRandomNumber, isEven,
} from '..';

export default () => {
  const instruction = 'Answer "yes" if number even otherwise answer "no"';
  console.log(`${welcomeMessage}\n${instruction}\n`);
  const playerName = askPlayerName();
  console.log(welcomePlayer(playerName));

  const makeGame = (counter) => {
    if (counter === 0) {
      return console.log(getEndGameMessage(playerName));
    }
    const min = 0;
    const max = 1000;
    const number = getRandomNumber(min, max);
    console.log(askQuestion(number));
    const trueAnswer = isEven(number) ? 'yes' : 'no';
    const playerAnswer = getPlayerAnswer();
    if (playerAnswer !== trueAnswer) {
      return console.log(getWrongMessage(playerName)(playerAnswer, trueAnswer));
    }
    console.log(getTrueMessage());
    return makeGame(counter - 1);
  };

  return makeGame(numberOfQuestions);
};
