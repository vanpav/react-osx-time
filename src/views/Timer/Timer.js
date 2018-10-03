import React from 'react';
import { Container, DisplayWrapper } from '../Stopwatch/styles';
import Display from './components/TimerDisplay';
import Controls from './components/TimerControls';

const Timer = () => (
  <Container>
    <DisplayWrapper>
      <Display />
      <Controls />
    </DisplayWrapper>
  </Container>
);

export default Timer;
