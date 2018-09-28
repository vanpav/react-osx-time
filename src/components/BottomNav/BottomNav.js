import React from 'react';
import { Container, Item, ItemText, StopwatchIcon, TimerIcon } from './styles';

const BottomNav = () => (
  <Container>
    <Item active>
      <StopwatchIcon />
      <ItemText>Секундомер</ItemText>
    </Item>
    <Item>
      <TimerIcon />
      <ItemText>Таймер</ItemText>
    </Item>
  </Container>
);

export default BottomNav;
