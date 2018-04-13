import React from 'react';

import { shallow } from 'enzyme';
import { ESI, SSI } from '../src/index';

describe('<ESI />', () => {
  it('render with an <esi:include /> tag', () => {
    const node = shallow(<ESI src="/foo" />, { disableLifecycleMethods: true });

    expect(node.html()).to.equal('<div><esi:include src="/foo" /></div>');
  });
});

describe('<SSI />', () => {
  it('render with an <!--# include --> comment', () => {
    const node = shallow(<SSI virtual="/foo" />, {
      disableLifecycleMethods: true,
    });

    expect(node.html()).to.equal('<div><!--# include virtual="/foo" --></div>');
  });
});
