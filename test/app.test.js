import Settings from '../src/js/app';

test('test one custom setting', () => {
  const settings = new Settings();
  settings.set('theme', 'gray');
  const expected = new Map();
  expected.set('theme', 'gray');
  expected.set('music', 'trance');
  expected.set('difficulty', 'easy');
  expect(settings.settings).toEqual(expected);
});

test('test all custom setting', () => {
  const settings = new Settings();
  settings.set('theme', 'light');
  settings.set('music', 'chillout');
  settings.set('difficulty', 'hard');
  const expected = new Map();
  expected.set('theme', 'light');
  expected.set('music', 'chillout');
  expected.set('difficulty', 'hard');
  expect(settings.settings).toEqual(expected);
});

test('test none custom setting', () => {
  const settings = new Settings();
  const expected = new Map();
  expected.set('theme', 'dark');
  expected.set('music', 'trance');
  expected.set('difficulty', 'easy');
  expect(settings.settings).toEqual(expected);
});
