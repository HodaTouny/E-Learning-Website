import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // This is the correct import for thunk
import rootReducer from '../reducers/courseReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
