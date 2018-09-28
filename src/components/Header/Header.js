// @flow
import React, { type Node } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex: 0 0 48px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

type Props = {
  title?: string,
};

const Header = ({ title }: Props): Node => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default withRouter(Header);
