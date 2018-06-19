import React from 'react';
import {shallow} from 'enzyme';

import JoinPitch from './JoinPitch';

describe('<JoinPitch />', () => {
  it('Renders without crashing', () => {
      shallow(<JoinPitch />);
  });
});
