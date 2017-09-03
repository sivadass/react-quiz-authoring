import { combineReducers } from 'redux';
import questionsReducer from './questions-reducer';
import editReducer from './edit-reducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  currentquestion: editReducer
  // More reducers if there are
  // can go here
});

export default rootReducer;