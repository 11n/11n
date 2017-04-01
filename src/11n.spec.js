const sayHello = require('./11n');

test('11n says hello', function () {
  expect(sayHello('11n')).toBe('11n says hello');
});
