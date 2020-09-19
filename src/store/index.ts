import { applyMiddleware, createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import rootreducer from './modules/rootreducer';
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

export default store;