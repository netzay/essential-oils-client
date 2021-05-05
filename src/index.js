import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));



