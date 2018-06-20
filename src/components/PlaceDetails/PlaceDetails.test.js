import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import PlaceDetails from './PlaceDetails';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<PlaceDetails />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <PlaceDetails />
            </Provider>
        )
    });
});
