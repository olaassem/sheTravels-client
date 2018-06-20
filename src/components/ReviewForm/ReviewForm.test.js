import React from 'react';
import {shallow} from 'enzyme';

import ReviewForm from './ReviewForm';

describe('<ReviewForm />', () => {
  it('Renders without crashing', () => {
      shallow(<ReviewForm />);
  });
  it('Should fire the postNewReview callback when the submit-form button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<ReviewForm postNewReview={callback} />);
    const value = 'Foobar';
    wrapper.update();
    wrapper.find('input[type="text"]').instance().value = value;
    wrapper.simulate('click');
    expect(callback).toHaveBeenCalledWith(value);
  });
  it('Should not fire postNewReview if the text input is empty', () => {
    const callback = jest.fn();
    const wrapper = mount(<ReviewForm postNewReview={callback} />);
    wrapper.simulate('click');
    expect(callback).not.toHaveBeenCalled();
  });
});
