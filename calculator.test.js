const { test } = require('@jest/globals');
const calculator = require('./calculator');

test('calculator has add()', () => {
  expect(calculator).toHaveProperty('add');
});
test('calculator has subtract()', () => {
  expect(calculator).toHaveProperty('subtract');
});
test('calculator has divide()', () => {
  expect(calculator).toHaveProperty('divide');
});
test('calculator has multiply()', () => {
  expect(calculator).toHaveProperty('multiply');
});
