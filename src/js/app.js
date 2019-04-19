// TODO: write code here

console.log('app.js bundled');

export default class Settings {
  constructor() {
    this.default = new Map();
    this.default.set('theme', 'dark');
    this.default.set('music', 'trance');
    this.default.set('difficulty', 'easy');
    this.custom = new Map();
  }

  set(name, value) {
    this.custom.set(name, value);
  }

  get settings() {
    const settings = new Map();
    const names = [...this.default.keys()];
    names.forEach((item) => {
      if (this.custom.has(item)) {
        settings.set(item, this.custom.get(item));
      } else {
        settings.set(item, this.default.get(item));
      }
    });
    return settings;
  }
}
