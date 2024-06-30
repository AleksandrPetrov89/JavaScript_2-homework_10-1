import GameSavingLoader from './classes/gamesavingloader.js';

GameSavingLoader.load().then((saving) => {
  // eslint-disable-next-line no-console
  console.log('Сохранение успешно загружено!');
  // eslint-disable-next-line no-console
  console.log(saving);
});
