import React from 'react';
import {shallow} from 'enzyme';

import AllReviewsContainer from './AllReviewsContainer';

describe('<AllReviewsContainer />', () => {
  it('Renders without crashing', () => {
      shallow(<AllReviewsContainer />);
  });
});
