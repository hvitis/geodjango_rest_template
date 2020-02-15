

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ServiceWorker from '../src/ServiceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import './assets/style.css';
import './assets/vendor_assets/css/brands.css'
import './assets/vendor_assets/css/fontawesome.min.css'
import './assets/vendor_assets/css/jquery-ui.css'
import './assets/vendor_assets/css/jquery.mCustomScrollbar.css'
import './assets/vendor_assets/css/line-awesome.min.css'
import './assets/vendor_assets/css/magnific-popup.css'


import reducer from './Store/Reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));
console.log('public url: ', process.env.PUBLIC_URL)


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();