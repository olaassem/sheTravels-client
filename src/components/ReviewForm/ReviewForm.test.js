import React from 'react';
import {shallow} from 'enzyme';

import ReviewForm from './ReviewForm';

describe('<ReviewForm />', () => {
  it('Renders without crashing', () => {
      shallow(<ReviewForm />);
  });
});
