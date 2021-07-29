import {applyMiddleware, createStore} from 'redux';
import rootReducers from './reducer/index';
import rootSagas from './saga/index';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

export let store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
