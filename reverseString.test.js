const { test, expect } = require('@jest/globals');
const reverseString = require('./reverseString');

test('hello to equal olleh', () => {
  expect(reverseString('hello')).toEqual('olleh');
});
test('world to equal dlrow', () => {
  expect(reverseString('world')).toEqual('dlrow');
});
