'use strict';

var babel = require('babel-core');

module.exports = {
  process: function (src, filename) {
    return babel.transform(src, {
	  filename: filename
    }).code;
  }
};