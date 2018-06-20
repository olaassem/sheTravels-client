import React from 'react';
import {shallow} from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {

  it('Renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Renders the github & linkedin icons', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.hasClass('githubIcon-container')).toEqual(true);
    expect(wrapper.hasClass('linkedinIcon-container')).toEqual(true);
  });

});
