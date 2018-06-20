import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Map from './Map';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Map />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Map />
            </Provider>
        )
    });
});
