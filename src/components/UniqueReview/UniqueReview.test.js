import React from 'react';
import {shallow} from 'enzyme';

import UniqueReview from './UniqueReview';

describe('<UniqueReview />', () => {
  it('Renders without crashing', () => {
      shallow(<UniqueReview />);
  });
});
