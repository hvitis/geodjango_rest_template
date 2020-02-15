

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import ServiceWorker from '../src/ServiceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';


import './assets/vendor_assets/css/bootstrap/bootstrap.css'
import './assets/style.css';
import './assets/vendor_assets/css/brands.css'
import './assets/vendor_assets/css/fontawesome.min.css'
import './assets/vendor_assets/css/jquery-ui.css'
import './assets/vendor_assets/css/jquery.mCustomScrollbar.css'
import './assets/vendor_assets/css/line-awesome.min.css'
import './assets/vendor_assets/css/magnific-popup.css'


import './assets/vendor_assets/js/jquery/jquery-1.12.3.js'
import './assets/vendor_assets/js/bootstrap/popper.js'
import './assets/vendor_assets/js/bootstrap/bootstrap.min.js'
import './assets/vendor_assets/js/jquery-ui.min.js'
import './assets/vendor_assets/js/jquery.barrating.min.js'
import './assets/vendor_assets/js/jquery.counterup.min.js'
import './assets/vendor_assets/js/jquery.magnific-popup.min.js'
import './assets/vendor_assets/js/jquery.mCustomScrollbar.concat.min.js'
import './assets/vendor_assets/js/jquery.waypoints.min.js'
import './assets/vendor_assets/js/masonry.pkgd.min.js'    
import './assets/vendor_assets/js/select2.full.min.js'
import './assets/vendor_assets/js/slick.min.js'
import './assets/theme_assets/js/locator.js'
import './assets/theme_assets/js/main.js'   

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