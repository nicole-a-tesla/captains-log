'use strict';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


// global.document = new JSDOM('<html><body></body></html>');
// global.window = document.defaultView;
// // global.navigator = window.navigator;

const dom = new JSDOM('<html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

function noop() {
  return {};
  }

// prevent mocha tests from breaking when trying to require a css file
   require.extensions['.css'] = noop;
   require.extensions['.svg'] = noop;
