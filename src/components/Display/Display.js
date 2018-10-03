// @flow
import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  align-items: center;
  font-size: 25vw; // IDLE
  //font-size: 18.5vw;  // HOURS
  //font-size: 16.7vw; // 3 hours symbols
  //font-size: 14.9vw; // 4hours symbols
  font-weight: 100;
`;

const Display = ({ children }: { children: any }) => (
  <DisplayContainer>{children}</DisplayContainer>
);

export default Display;
