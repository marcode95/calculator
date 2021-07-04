import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(+numberOne);
  const y = Big(+numberTwo);
  let result;
  switch (operation) {
    case '+':
      result = Big(x.plus(y));
      break;
    case '-':
      result = Big(x.minus(y));
      break;
    case 'X':
      result = Big(x.times(y));
      break;
    case '/':
      result = Big(x.div(y));
      break;
    case '%':
      result = Big(x.times(0.01));
      break;
    default:
      result = 'Error';
  }
  return result.toString();
};

export default operate;
