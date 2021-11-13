const { test, expect } = require('@jest/globals');
let caeserCipher = require('./caeserCipher');

test('shift by 1', () => {
  expect(caeserCipher('abcdefghijklmnopqrstuvwxyz', 1)).toEqual('bcdefghijklmnopqrstuvwxyza');
});
test('shift by 5', () => {
  expect(caeserCipher('abcdefghijklmnopqrstuvwxyz', 5)).toEqual('fghijklmnopqrstuvwxyzabcde');
});
test('shift by 2 with multiple strings', () => {
  expect(caeserCipher('Hello world', 2)).toEqual('llo worldHe');
});
test('shift by 0 with multiple strings', () => {
  expect(caeserCipher('Hello world', 0)).toEqual('Hello world');
});
test('shift by 2 with multiple strings', () => {
  expect(caeserCipher('Hello world. i am new', 2)).toEqual('llo world. i am newHe');
});
