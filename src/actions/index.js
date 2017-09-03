// Add Question
export const addNewQuestion = (data) => {
  return {
    type: 'ADD_QUESTION',
    payload: data
  }
}

// Edit Question
export const editQuestion = (id) => {
  return {
    type: 'EDIT_QUESTION',
    payload: id
  }
}