const msgs = require('../db');

function findAll() {
  return msgs;
}

module.exports = { findAll }
