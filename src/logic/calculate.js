import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = data;

  if (buttonName === 'AC') {
    newData.total = 0;
    newData.next = 0;
  } else if (buttonName === '+/-') {
    newData.total = -(newData.total);
    newData.next = -(newData.next);
  } else {
    operate(newData.total, newData.next, buttonName);
  }
};

export default calculate;
