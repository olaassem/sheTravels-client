import React from 'react';
import {shallow} from 'enzyme';

import Review from './Review';

describe('<Review />', () => {
  it('Renders without crashing', () => {
      shallow(<Review />);
  });
});
