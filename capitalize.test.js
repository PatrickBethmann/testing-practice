const { test, expect } = require('@jest/globals');
let capitalize = require('./capitalize');

test('hello to equal Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});
test('World to equal World', () => {
  expect(capitalize('World')).toEqual('World');
});
test('hello world to equal Hello world', () => {
  expect(capitalize('hello world')).toEqual('Hello world');
});
