// @flow
import React, { type Node } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './styles';
import reducers from './reducers';
import Routes from './routes';

const store = createStore(reducers);

const App = (): Node => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
