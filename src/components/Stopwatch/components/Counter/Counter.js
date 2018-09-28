// @flow
import React, { type Node } from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

type Props = {
  timeString: number,
};

const Wrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  align-items: center;
  font-size: 25vw; // IDLE
  //font-size: 18.5vw;  // HOURS
  //font-size: 16.7vw; // 3 hours symbols
  //font-size: 14.9vw; // 4hours symbols
  font-variant-numeric: tabular-nums;
  font-weight: 100;
`;

const Counter = ({ timeString }: Props): Node => (
  <Wrapper>{timeString}</Wrapper>
);

export default pure(Counter);
