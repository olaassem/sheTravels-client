import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Homepage from './Homepage';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Homepage />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Homepage />
            </Provider>
        )
    });
});
