import sayHello from './11n';

test('11n says hello', () => {
  expect(sayHello('11n')).toBe('11n says hello');
});
