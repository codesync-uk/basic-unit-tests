const { add, multiply } = require('../index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiply 8 * 2 to equal 16', () => {
  expect(multiply(8, 2)).toBe(16);
});

