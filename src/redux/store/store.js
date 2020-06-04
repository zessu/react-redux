import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';
import { initialState } from './initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
