// Add Question
export const addNewQuestion = (data) => {
  return {
    type: 'ADD_QUESTION',
    payload: data
  }
}

// Select Question
export const selectQuestion = (question) => {
  return {
    type: 'EDIT_QUESTION',
    payload: question
  }
}

// Remove Question
export const removeQuestion = (id) => {
  return {
    type: 'REMOVE_QUESTION',
    payload: id
  }
}