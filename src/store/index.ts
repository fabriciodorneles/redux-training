import { applyMiddleware, createStore } from 'redux';
import { ICartState } from './modules/cart/types';

import rootreducer from './modules/rootreducer';
import rootSaga from './modules/rootSaga';

import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export interface IState {
    cart: ICartState;
}
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    rootreducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

export default store;