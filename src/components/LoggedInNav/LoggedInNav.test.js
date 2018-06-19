import React from 'react';
import {shallow} from 'enzyme';

import LoggedInNav from './LoggedInNav';

describe('<LoggedInNav />', () => {
  it('Renders without crashing', () => {
      shallow(<LoggedInNav />);
  });
});
