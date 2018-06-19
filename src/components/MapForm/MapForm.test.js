import React from 'react';
import {shallow} from 'enzyme';

import MapForm from './MapForm';

describe('<MapForm />', () => {
  it('Renders without crashing', () => {
      shallow(<MapForm />);
  });
});
