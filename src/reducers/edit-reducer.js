const editReducer = (state = null, action) => {
  switch(action.type) {
    case 'EDIT_QUESTION':
      const id = action.payload;
      return state = id
    default:
      return state;
   }
};

export default editReducer;