// @flow
import React, { type Node } from 'react';
import { Container, Wrapper } from './styles';
import Header from 'components/Header';
import BottomNav from 'components/BottomNav';
import Stopwatch from 'components/Stopwatch';

const App = (): Node => (
  <Container>
    <Header title="Секундомер" />
    <Wrapper>
      <Stopwatch />
    </Wrapper>
    <BottomNav />
  </Container>
);

export default App;
