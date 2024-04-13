// loggingUtility.js

class Logger {
    constructor(logLevel) {
      this.logLevel = logLevel || 'info';
    }
  
    log(message, level = 'info') {
      if (this.shouldLog(level)) {
        console.log([${level.toUpperCase()}] ${message});
      }
    }
  
    shouldLog(level) {
      const levels = ['info', 'debug', 'warn', 'error'];
      return levels.indexOf(level) >= levels.indexOf(this.logLevel);
    }
  
    setLogLevel(logLevel) {
      this.logLevel = logLevel;
    }
  }
  
  module.exports = Logger;