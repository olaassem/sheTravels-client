import React from 'react';
import {shallow} from 'enzyme';

import PlaceDetails from './PlaceDetails';

describe('<PlaceDetails />', () => {
  it('Renders without crashing', () => {
      shallow(<PlaceDetails />);
  });
});
