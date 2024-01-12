import caesarCipher from '../code/caesarCipher';

test('caesarCipher example 1', () => {
  expect(caesarCipher('ASDDAWWSAD', 3)).toMatch('DVGGDZZVDG');
});

test('caesarCipher example 2', () => {
  expect(caesarCipher('abcdyz', 4)).toMatch('efghcd');
});

test('caesarCipher example 3', () => {
  expect(caesarCipher('ABCDZ', 4)).toMatch('EFGHD');
});
