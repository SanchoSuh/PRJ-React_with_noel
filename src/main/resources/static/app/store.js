

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk';

import hello1 from './hello1.js';
import hello2 from './hello2.js';

export const store = createStore(
    combineReducers({
        hello1,
        hello2
    }),
    {},
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export const dispatch = store.dispatch;
export const subscribe = store.subscribe;
export const getState = store.getState;