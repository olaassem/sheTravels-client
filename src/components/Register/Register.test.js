import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Register from './Register';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Register />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Register />
            </Provider>
        )
    });
});
