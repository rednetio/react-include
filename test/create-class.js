import React from 'react';
import { mount } from 'enzyme';

import createClass from '../src/create-class';

describe('createClass()', function() {
  const Foo = createClass('Foo', {}, 'href', () => '');

  beforeEach(() => {
    this.req = [];
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.xhr.onCreate = xhr => this.req.push(xhr);
  });

  afterEach(() => {
    this.xhr.restore();
  });

  it('set the displayName', () => {
    expect(Foo.displayName).to.equal('Foo');
  });

  it('make an XHR call on mount', () => {
    const wrapper = mount(<Foo href="/foo" />);

    this.req[0].respond(200, {}, '<b>Lorem ipsum dolor sit amet</b>');

    const node = wrapper.render();

    expect(node.html()).to.equal('<b>Lorem ipsum dolor sit amet</b>');
  });

  it('abort the XHR call on unmount', () => {
    mount(<Foo href="/foo" />).unmount();

    expect(this.req[0].status).to.equal(0);
    expect(this.req[0].readyState).to.equal(sinon.FakeXMLHttpRequest.UNSENT);
  });

  it('do not abort the XHR call if the server has answered', () => {
    const wrapper = mount(<Foo href="/foo" />);

    this.req[0].respond(200, {}, 'foo');

    wrapper.unmount();

    expect(this.req[0].status).to.equal(200);
    expect(this.req[0].readyState).to.equal(sinon.FakeXMLHttpRequest.DONE);
  });
});
