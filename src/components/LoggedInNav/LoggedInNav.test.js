import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import LoggedInNav from './LoggedInNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoggedInNav />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <LoggedInNav />
            </Provider>
        )
    });
});
