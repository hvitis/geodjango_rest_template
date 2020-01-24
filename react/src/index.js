import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './Store/Reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducers,
    compose( 
            applyMiddleware(thunk)                  
        )
    ) 
	ReactDOM.render(
		<Provider store={store}><App /></Provider>,
		document.getElementById('root')
	)

