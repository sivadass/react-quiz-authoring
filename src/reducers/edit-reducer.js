const editReducer = (state = null, action) => {
  switch(action.type) {
    case 'EDIT_QUESTION':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
   }
};

export default editReducer;