import calculate from '../logic/calculate';

describe('checks if logic methods are working', () => {
  test('AC should turn all math values into null', () => {
    const result = calculate({ total: '6', next: '', operation: '' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('+/- should reverse number', () => {
    const result = calculate({ total: '3', next: '', operate: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual(-3);
  });

  test('+/- should reverse number in both directions', () => {
    const result = calculate({ total: '-3', next: '', operate: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual(3);
  });

  test('. should turn integers into decimal numbers', () => {
    const result = calculate({ total: '3', next: '', operate: '' }, '.');
    const { total } = result;
    expect(total).toEqual('3.');
  });

  test('% should return percentage', () => {
    const result = calculate({ total: '100', next: '', operate: '' }, '%');
    const { total } = result;
    expect(total).toEqual('100');
  });
});
