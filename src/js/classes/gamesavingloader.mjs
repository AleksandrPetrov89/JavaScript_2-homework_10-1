import read from '../reader.mjs';
import json from '../parser.mjs';

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
