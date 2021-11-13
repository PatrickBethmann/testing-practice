let arrayAnalysis = require('./arrayAnalysis');

test('array containing NaN', () => {
  expect(() => {
    arrayAnalysis(['hello', 'world', 'my', 'name', 'is']);
  }).toThrow(Error);
});
test('not an array', () => {
  expect(() => {
    arrayAnalysis('hello');
  }).toThrow(Error);
});
test('[1, 2, 3, 4, 5]', () => {
  expect(arrayAnalysis([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 });
});
test('[2, 4, 5, 6, 8]', () => {
  expect(arrayAnalysis([2, 4, 5, 6, 8])).toEqual({ average: 5, min: 2, max: 8, length: 5 });
});
test('[2, "hello", 5, 6, 8]', () => {
  expect(() => {
    arrayAnalysis([2, 'hello', 5, 6, 8]);
  }).toThrow();
});
