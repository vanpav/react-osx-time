// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import BottomNav from '../BottomNav';
import Header from '../Header';
import { Container, Content } from './styles';

const getCurrentSection = (
  sections: Array<Object> = [],
  pathname: string
): Object => sections.find(tab => tab.path === pathname) || {};

type Props = {
  sections: Array<{}>,
  children?: any,
  location: {
    pathname: string,
  },
};

const Layout = ({ sections, children, location: { pathname } }: Props) => {
  return (
    <Container>
      <Header title={getCurrentSection(sections, pathname).title} />
      <Content>{children}</Content>
      <BottomNav sections={sections} pathname={pathname} />
    </Container>
  );
};

export default withRouter(Layout);
