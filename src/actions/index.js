// Add an Item
export const addNewQuestion = (data) => {
  console.log("hi...");
  return {
    type: 'ADD_QUESTION',
    payload: data
  }
}

// Remove an item
export const removeExpense = (key) => {
  return dispatch => {
    console.log("hi");
  }
}