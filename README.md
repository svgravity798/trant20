# Logging Utility

A simple JavaScript logging utility package that allows you to log messages at different levels (info, debug, warn, error).

## Installation

You can install the Logging Utility package via npm:

npm install logging-utility

## Usage

const Logger = require('logging-utility');

// Create a logger instance with default log level 'info'
const logger = new Logger();

// Log messages at different levels
logger.log('This is an info message', 'info');
logger.log('This is a debug message', 'debug');
logger.log('This is a warning message', 'warn');
logger.log('This is an error message', 'error');

By default, the log level is set to 'info'. You can also specify the log level when creating the logger instance:

const logger = new Logger('debug');

This will log messages at the 'debug' level and above.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.