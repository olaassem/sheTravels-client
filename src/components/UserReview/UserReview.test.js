import React from 'react';
import {shallow} from 'enzyme';

import UserReview from './UserReview';

describe('<UserReview />', () => {
  it('Renders without crashing', () => {
      shallow(<UserReview />);
  });
});
