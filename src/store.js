import {createStore, combineReducers} from 'redux'
import { orders } from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension';


const reducers = {
    orders,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, composeWithDevTools())

