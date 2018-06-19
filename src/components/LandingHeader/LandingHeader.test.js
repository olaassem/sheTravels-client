import React from 'react';
import {shallow} from 'enzyme';

import LandingHeader from './LandingHeader';

describe('<LandingHeader />', () => {
  it('Renders without crashing', () => {
      shallow(<LandingHeader />);
  });
});
