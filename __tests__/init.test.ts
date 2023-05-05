import { init } from '../src/index';
test('My Greeter', () => {
  expect(init('Webord')).toBe('Webord is ready to use!');
});
