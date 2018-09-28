// @flow
import React, { type Node } from 'react';
import { Container, Tab, TabText, Icon } from './styles';

type Props = {
  sections: Array<{ path: string, title: string, icon: string }>,
  pathname: string,
};

const BottomNav = (props: Props): Node => {
  const { sections, pathname } = props;
  return (
    <Container>
      {sections.map(({ path, icon, title }) => (
        <Tab key={path} to={path} active={pathname === path}>
          <Icon name={icon} />
          <TabText>{title}</TabText>
        </Tab>
      ))}
    </Container>
  );
};

export default BottomNav;
