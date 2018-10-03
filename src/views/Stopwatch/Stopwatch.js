// @flow
import React from 'react';
import { pure } from 'recompose';
import Display from './components/StopwatchDisplay';
import Controls from './components/StopwatchControls';
import Laps from './components/Laps';
import { Container, DisplayWrapper, LapsWrapper } from './styles';

const Stopwatch = () => (
  <Container>
    <DisplayWrapper>
      <Display />
      <Controls />
    </DisplayWrapper>
    <LapsWrapper>
      <Laps />
    </LapsWrapper>
  </Container>
);

export default pure(Stopwatch);
