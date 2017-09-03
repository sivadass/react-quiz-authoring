// Add Question
export const addNewQuestion = (data) => {
  return {
    type: 'ADD_QUESTION',
    payload: data
  }
}

// Edit Question
export const editQuestion = (question) => {
  return {
    type: 'EDIT_QUESTION',
    payload: question
  }
}