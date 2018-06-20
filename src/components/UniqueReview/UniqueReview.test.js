import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import UniqueReview from './UniqueReview';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<UniqueReview />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <UniqueReview />
            </Provider>
        )
    });
});
