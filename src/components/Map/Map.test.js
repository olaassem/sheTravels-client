import React from 'react';
import {shallow} from 'enzyme';

import Map from './Map';

describe('<Map />', () => {
  it('Renders without crashing', () => {
      shallow(<Map />);
  });
});
