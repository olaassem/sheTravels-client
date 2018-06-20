import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import MapForm from './MapForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<MapForm />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <MapForm />
            </Provider>
        )
    });
});
