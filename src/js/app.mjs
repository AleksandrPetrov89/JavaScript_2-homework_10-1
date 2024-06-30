import GameSavingLoader from './classes/gamesavingloader.mjs';

GameSavingLoader.load().then((saving) => {
  console.log('Сохранение успешно загружено!');
  console.log(saving);
});
