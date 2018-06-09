//file that executes everything and the root id
//tell react app we're using redux

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

//conect redux to React
//provider is the state-holder
import {Provider} from 'react-redux';
import store from './store/store';


//PROVIDER is the entire store
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

registerServiceWorker();



// import {setLanguage} from './actions';
//
// // Should output {language: 'en'}
// console.log(store.getState());
// // Switch to German
// store.dispatch(setLanguage('de'));
// // Should output {language: 'de'}
// console.log(store.getState());
