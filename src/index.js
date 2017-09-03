import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import uuid from 'uuid4';

import App from './app';

const initialState = {
  questions: [
  {
    "id": "418123e3-240d-49c2-b9e3-6c9e61c5e70e",
    "question": "Country that has the highest in Barley Production?",
    "image": "",
    "options": {
      "a": "China",
      "b": "France",
      "c": "India",
      "d": "Russia"
    }
  },
  {
    "id": "ee5e18be-0c9c-489a-82f1-72bd0388c420",
    "question": "The metal whose salts are sensitive to light is?",
    "image": "",
    "options": {
      "a": "Zinc",
      "b": "Silver",
      "c": "Copper",
      "d": "Aluminium"
    }
  }
]
}

const middleWare = applyMiddleware(thunk);
let store = createStore(
  rootReducer,
  initialState,
  middleWare
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);