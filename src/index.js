import readlineSync from 'readline-sync';

const MAX_NUMBER = 100;
const EVEN_FACTOR = 2;
const RIGHT_ANSWERS_COUNT = 3;

const welcome = () => console.log('Welcome to the Brain Games!');

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const randomNumber = max => Math.floor(Math.random() * max);

const realAnswer = (isEven) => {
  const answer = isEven ? 'yes' : 'no';
  return answer;
};

const gameResult = () => {
  let answersCount = 0;
  while (answersCount < RIGHT_ANSWERS_COUNT) {
    const number = randomNumber(MAX_NUMBER);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = number % EVEN_FACTOR === 0;
    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer(isEven)}'`);
      return false;
    }
  }
  return true;
};

const isEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = greeting();
  const farewell = gameResult() ? 'Congratulations' : 'Let\'s try again';
  console.log(`${farewell}, ${userName}!`);
};

export { welcome, greeting, isEvenGame };
