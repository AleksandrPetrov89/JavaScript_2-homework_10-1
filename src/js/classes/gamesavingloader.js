import read from '../reader.js';
import json from '../parser.js';

export default class GameSavingLoader {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }

  static load() {
    return new Promise((resolve) => {
      read().then((data) => json(data))
        .then((str) => {
          const { id, created, userInfo } = JSON.parse(str);
          resolve(new this(id, created, userInfo));
        });
    });
  }
}
