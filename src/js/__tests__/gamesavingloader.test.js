import GameSavingLoader from '../classes/gamesavingloader.js';

test('Проверка работы метода load()', () => {
  const res = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  // eslint-disable-next-line no-console
  GameSavingLoader.load().then((saving) => {
    // console.log(saving, typeof (saving));
    expect(saving).toEqual(res);
  });
});
