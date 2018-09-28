// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import BottomNav from '../BottomNav';
import Header from '../Header';
import { Container, Content } from './styles';

const getCurrentSection = (sections: Array<Object> = [], pathname: string) =>
  sections.find(tab => tab.path === pathname) || {};

const Layout = ({ sections, children, location: { pathname } }) => {
  return (
    <Container>
      <Header title={getCurrentSection(sections, pathname).title} />
      <Content>{children}</Content>
      <BottomNav sections={sections} pathname={pathname} />
    </Container>
  );
};

export default withRouter(Layout);
