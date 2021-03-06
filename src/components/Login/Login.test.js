import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Login from './Login';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Login />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Login />
            </Provider>
        )
    });
});
