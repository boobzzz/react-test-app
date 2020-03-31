import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { firebaseReducer } from 'react-redux-firebase';
import * as R from './store/reducers';

import App from './App';
import './index.css';

const reducers = combineReducers({
    news: R.articlesReducer,
    login: R.authReducer,
    firebase: firebaseReducer,
    profile: R.profileReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
