import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import oils from './reducers/oils';
import oilFormData from './reducers/oilFormData'
const reducers = combineReducers({
  oils,
  oilFormData
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;