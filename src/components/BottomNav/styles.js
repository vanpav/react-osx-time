// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #181818;
  height: 56px;
  flex: 0 0 56px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;

  &::before {
    content: '';
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
  }
`;

const StyledTab = styled.span`
  font-size: 0.6rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.active ? '#F29933' : '#7f7f7f')};
`;

type ItemProps = {
  children: any,
  active?: boolean,
};

const StyledLink = styled(Link)`
  color: inherit;
  text-align: center;
  text-decoration: none;
`;

export const Tab = (props: ItemProps) => {
  const { active = false, children, ...rest } = props;
  return (
    <StyledTab active={active}>
      <StyledLink {...rest}>{children}</StyledLink>
    </StyledTab>
  );
};

export const TabText = styled.div`
  margin-top: 4px;
`;

export const SVGIcon = styled.svg.attrs({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
})``;

export const Icon = ({ name }: { name?: string }): Node => {
  switch (name) {
    case 'stopwatch':
      return (
        <SVGIcon>
          <path d="M10.62 3.095l.071-1.157A1 1 0 0 1 11.69 1h.622a1 1 0 0 1 .998.938l.072 1.157C18.25 3.767 22 7.945 22 13c0 5.523-4.477 10-10 10S2 18.523 2 13c0-5.054 3.75-9.233 8.62-9.905zM11.5 16a.5.5 0 1 0 1 0v-1.585a1.5 1.5 0 0 0 0-2.83V5.5a.5.5 0 1 0-1 0v6.085a1.5 1.5 0 0 0 0 2.83V16zm8.485-12.4L21.4 5.016a.5.5 0 0 1 0 .707l-.353.353a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 0-.707l.353-.353a.5.5 0 0 1 .707 0z" />
        </SVGIcon>
      );
    case 'timer':
      return (
        <SVGIcon>
          <path d="M13 6a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12a10.97 10.97 0 0 1 3.521-8.067A1 1 0 1 1 5.881 5.4 8.971 8.971 0 0 0 3 12a9 9 0 1 0 10-8.945V6zm.414 7.414c-.78.781-1.883.617-2.664-.164C9.969 12.469 6.646 7.354 7 7c.354-.354 5.469 2.969 6.25 3.75.781.781.945 1.883.164 2.664z" />
        </SVGIcon>
      );
    default:
      return null;
  }
};
