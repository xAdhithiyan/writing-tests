import calculator from '../code/calculator';

test('calculator', () => {
  // console.log(calculator(2, 1));
  expect(calculator(2, 1)).toEqual({
    add: 3,
    sub: 1,
    mul: 2,
    div: 2,
  });
});
