import { combineReducers } from 'redux';
import { courseReducer } from './../reducers/courseReducer';

const rootReducer = combineReducers({
  app: courseReducer,
});

export default rootReducer;
