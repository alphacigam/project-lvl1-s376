import readlineSync from 'readline-sync';

const askPlayerName = () => readlineSync.question('May I have your name? ');
const welcomePlayer = name => `Hello, ${name}!`;

export const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = askPlayerName();
  console.log(welcomePlayer(playerName));
};

const getRandomNumber = () => {
  const min = 0;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEven = number => number % 2 === 0;

export const startBrainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const playerName = askPlayerName();
  console.log(welcomePlayer(playerName));

  const numberOfQuestion = 3;

  const makeGame = (counter) => {
    if (counter === 0) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const trueAnswer = isEven(number) ? 'yes' : 'no';
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== trueAnswer) {
      return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${playerName}!`);
    }
    console.log('Correct!');
    return makeGame(counter - 1);
  };

  return makeGame(numberOfQuestion);
};
