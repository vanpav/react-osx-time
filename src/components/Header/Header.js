import React from 'react';
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

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Header;
