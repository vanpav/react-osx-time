// @flow
import React, { type Node } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles';
import Routes from './routes';

const App = (): Node => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
