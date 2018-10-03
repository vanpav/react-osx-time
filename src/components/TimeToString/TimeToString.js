// @flow
import React from 'react';
import styled from 'styled-components';
import { formatTimeString } from './utils';

const Wrapper = styled.span`
  font-variant-numeric: tabular-nums;
`;

const TimeToString = ({
  time,
  withMiliseconds = true,
}: {
  time?: number,
  withMiliseconds?: boolean,
}) => (
  <Wrapper>
    {time !== undefined && formatTimeString(time, withMiliseconds)}
  </Wrapper>
);

export default TimeToString;
