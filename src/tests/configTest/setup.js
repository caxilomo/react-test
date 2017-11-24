/**
 * Assertion and testing utilities
 */

require('babel-register');
require('require-ensure');
require('babel-polyfill');
require('ignore-styles');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
const { window } = new JSDOM('<html><head><body><script></script></body></html>');
global.window = window;
global.document = window.document;
global.window = global.document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = global.window.navigator;
global.Translate = {
  locale: 'en',
  messages: {},
};

global.window.Translate = global.Translate;

