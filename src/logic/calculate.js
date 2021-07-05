import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = data;

  if (buttonName === 'AC') {
    newData.total = null;
    newData.next = null;
    newData.operation = null;
  }

  if (buttonName === '+/-') {
    if (data.total && !data.next) {
      newData.total = data.total * (-1);
    }
    if (data.next) {
      newData.next = data.total * (-1);
    }
  }

  if (buttonName === '.') {
    if (!data.total && !data.next) {
      newData.total = '0.';
    }
    if (data.total && data.total.indexOf('.') === -1 && !data.next) {
      newData.total = `${data.total}.`;
    }
    if (data.next && data.next.indexOf('.') === -1) {
      newData.next = `${data.next}.`;
    }
  }

  if (/[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]/.test(buttonName)) {
    if (!data.total || data.total === '0') {
      newData.total = buttonName;
    } else if (data.total && data.total !== '0' && !data.next && !data.operation) {
      newData.total += buttonName;
      if (buttonName === '0' && data.total === '0') {
        newData.total = data.total;
      }
    }
    if (data.total && data.operation && (!data.next || data.next === '0')) {
      newData.next = buttonName;
    } else if (data.total && data.next && data.operation && data.next !== '0') {
      newData.next += buttonName;
    }
  }

  if (['+', '-', 'X', '/', '='].includes(buttonName)) {
    if (data.total && data.next && data.operation) {
      newData.total = operate(data.total, data.next, data.operation);
      newData.next = undefined;
      if (buttonName === '=') {
        newData.operation = undefined;
      } else {
        newData.operation = buttonName;
      }
    }

    if (data.total && !data.next) {
      if (buttonName === '=') {
        newData.operation = undefined;
      } else {
        newData.operation = buttonName;
      }
    }
  }

  return newData;
};

export default calculate;
