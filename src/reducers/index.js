import { combineReducers } from 'redux';
import questionsReducer from './questions-reducer';

const rootReducer = combineReducers({
  questions: questionsReducer
  // More reducers if there are
  // can go here
});

export default rootReducer;