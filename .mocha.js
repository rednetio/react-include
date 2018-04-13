/* istanbul ignore file */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

// http://airbnb.io/enzyme/docs/guides/jsdom.html
const jsdom = new JSDOM('<?xml version="1.0" ?><html xmlns:esi="http://www.edge-delivery.org/esi/1.0"><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});

  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);

global.XMLHttpRequest = window.XMLHttpRequest;

Object.defineProperty(window, 'XMLHttpRequest', {
  get: () => global.XMLHttpRequest,
});

// Cannot be imported earlier since it monkey-patches global.XMLHttpRequest.
global.sinon = require('sinon');
global.expect = expect;

configure({ adapter: new Adapter() });
