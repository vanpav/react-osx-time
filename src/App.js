// @flow
import React, { type Node } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles';
import Routes from './routes';

const App = (): Node => (
  <BrowserRouter>
    <Routes />
    {/*<Container>*/}
    {/*<Header title="Секундомер" />*/}
    {/*<Wrapper>*/}
    {/*<Stopwatch />*/}
    {/*</Wrapper>*/}
    {/**/}
    {/*</Container>*/}
  </BrowserRouter>
);

export default App;
