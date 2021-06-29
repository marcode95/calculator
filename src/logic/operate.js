import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let result = 0;
  switch (operation) {
    case '+':
      result = x.plus(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    case 'X':
      result = x.times(y);
      break;
    case '/':
      result = x.div(y);
      break;
    case '%':
      result = x.times(0.01);
      break;
    default:
      result = 'Error';
  }
  return result.toString();
};

export default operate;
