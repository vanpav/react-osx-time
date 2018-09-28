// @flow
import React from 'react';
import styled from 'styled-components';
import { hexToRGB } from '../../utils';

const variants = {
  grey: '#EBEBEB',
  green: '#7EDC83',
  red: '#D15C4A',
};

const getColor = (variant, alpha) => {
  const hex = variants[variant] || variants.grey;
  return hexToRGB(hex, alpha);
};

const StyledButton = styled.button`
  outline: none;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 0;
  font-size: 1rem;
  background: ${props => getColor(props.variant, 0.2)};
  color: ${props => getColor(props.variant)};

  &:disabled {
    background: ${props => getColor(props.variant, 0.1)};
    color: ${props => getColor(props.variant, 0.3)};
  }
`;

type Props = {
  children: string,
  disabled: boolean,
  variant: 'grey' | 'red' | 'green',
  onClick?: Function,
};

const Button = ({ children, onClick, disabled, variant }: Props) => (
  <StyledButton onClick={onClick} disabled={disabled} variant={variant}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  variant: 'grey',
};

export default Button;
