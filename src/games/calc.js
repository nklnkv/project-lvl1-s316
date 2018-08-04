import randomNumber from '../helpers';

const OPERATORS = ['+', '-', '*'];
const FUNCTIONS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const description = 'What is the result of the expressionr?\n';

const makeTask = (iteration) => {
  const operator = OPERATORS[iteration % 3];
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();

  return {
    question: `${firstNumber} ${operator} ${secondNumber}`,
    answer: FUNCTIONS[operator](firstNumber, secondNumber),
  };
};

const check = (userAnswer, number) => {
  const result = {
    isWin: parseInt(userAnswer, 10) === number,
    rightAnswer: number,
  };

  return result;
};

export {
  description,
  makeTask,
  check,
};
