const questionsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      const newQuestion = action.payload;
      return [
        ...state,
        newQuestion
      ]
    case 'REMOVE_QUESTION':
      const idToRemove = action.payload;
      const newState = state.filter((item) => item.id !== idToRemove);
      return state = newState;
    default:
      return state;
   }
};

export default questionsReducer;