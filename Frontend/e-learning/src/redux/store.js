import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';//for handling asynchronous actions
import rootReducer from '../reducers/courseReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
