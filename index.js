'use strict';

var chalk = require('chalk');

function error(...messages) {
  console.log(chalk.bold.red('Error'));
  console.log(chalk.red(...messages));
}

function success(...messages) {
  console.log(chalk.green(...messages));
}

function warning(...messages) {
  console.log(chalk.bold.keyword('orange')('Warning'));
  console.log(chalk.keyword('orange')(...messages));
}

function info(...messages) {
  console.log(chalk.hex('#337ab7')(...messages));
}

function log(...messages) {
  console.log(...messages);
}

module.exports = {
  error: error,
  success: success,
  warning: warning,
  info: info,
  log: log
};