import React from 'react';
import {shallow} from 'enzyme';

import Homepage from './Homepage';

describe('<Homepage />', () => {
  it('Renders without crashing', () => {
      shallow(<Homepage />);
  });
});
