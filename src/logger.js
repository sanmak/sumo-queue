class Logger {
  constructor(name) {
    this.name = name;
  }
  debug(str) {
    console.debug(`${this.name} debug log: ${str}`);
  }
  error(err) {
    console.error(`${this.name} error log:`, err);
  }
}

module.exports = Logger;
