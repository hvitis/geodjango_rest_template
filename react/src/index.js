

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';
    import registerServiceWorker from '../src/registerServiceWorker';
    import { createStore, compose, applyMiddleware } from 'redux';
    import { Provider } from 'react-redux';
    import thunk from 'redux-thunk';
    
    import reducer from './Store/Reducers/auth';
    import rootReducers from './Store/Reducers/rootReducer';

    const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    
    const store = createStore(rootReducers, composeEnhances(
        applyMiddleware(thunk)
    ));
    
    const app = (
        <Provider store={store}>
            <App />
        </Provider>
    )
    
    ReactDOM.render(app, document.getElementById('root'));
    registerServiceWorker();