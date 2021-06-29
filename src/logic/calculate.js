import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = data;

  if (buttonName === 'AC') {
    newData.total = 0;
    newData.next = 0;
    return newData;
  } if (buttonName === '+/-') {
    newData.total = -(newData.total);
    newData.next = -(newData.next);
    return newData;
  }
  const result = operate(newData.total, newData.next, buttonName);
  return result;
};

export default calculate;
