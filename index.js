'use strict';

const colors = require('./colors');

function clg(foreground, background, ...messages) {
  console.log(foreground + background, ...messages, colors.Reset);
}

function error(...messages) {
  clg(colors.foreground.Red, '', ...messages);
}

function success(...messages) {
  clg(colors.foreground.Green, '', ...messages);
}

function warning(...messages) {
  clg(colors.foreground.Yellow, '', ...messages);
}

function info(...messages) {
  clg(colors.foreground.Blue, '', ...messages);
}

function prompt(...messages) {
  clg(colors.Dim, '', ...messages);
}

function log(...messages) {
  console.log(colors.Reset, ...messages);
}

module.exports = {
  error: error,
  success: success,
  warning: warning,
  info: info,
  prompt: prompt,
  log: log
};