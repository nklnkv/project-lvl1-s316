import readlineSync from 'readline-sync';

const RIGHT_ANSWERS_COUNT = 3;

const welcome = () => console.log('Welcome to the Brain Games!');

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const gameRunner = ({ description, makeTask, check }) => {
  console.log(description);
  const userName = greeting();

  let iteration = 0;
  let farewell = 'Congratulations';

  while (iteration < RIGHT_ANSWERS_COUNT) {
    const { question, answer } = makeTask(iteration);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const result = check(userAnswer, answer);
    if (result.isWin) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result.rightAnswer}'`);
      farewell = 'Let\'s try again';
      break;
    }

    iteration += 1;
  }

  console.log(`${farewell}, ${userName}!`);
};

export { welcome, greeting, gameRunner };
