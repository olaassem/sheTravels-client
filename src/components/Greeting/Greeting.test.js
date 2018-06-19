import React from 'react';
import {shallow} from 'enzyme';

import Greeting from './Greeting';

describe('<Greeting />', () => {
  it('Renders without crashing', () => {
      shallow(<Greeting />);
  });
});
