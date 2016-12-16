import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './data/rootReducer';
import App from './App';
import paths from 'data/HeroPathContent.json';
// import '../node_modules/react-grid-layout/css/styles.css';
// import '../node_modules/react-resizable/css/styles.css';
// import './index.css';

import '../node_modules/semantic-ui-css/semantic.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
