import randomNumber from '../helpers';

const EVEN_FACTOR = 2;

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const makeTask = () => {
  const questionedNumber = randomNumber();
  return {
    question: questionedNumber,
    answer: questionedNumber,
  };
};

const check = (userAnswer, number) => {
  const isEven = number % EVEN_FACTOR === 0;
  return {
    isWin: ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')),
    rightAnswer: isEven ? 'yes' : 'no',
  };
};

export {
  description,
  makeTask,
  check,
};
