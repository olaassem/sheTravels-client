import React from 'react';
import {shallow} from 'enzyme';

import UserReviewsContainer from './UserReviewsContainer';

describe('<UserReviewsContainer />', () => {
  it('Renders without crashing', () => {
      shallow(<UserReviewsContainer />);
  });
});
