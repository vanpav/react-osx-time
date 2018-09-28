// @flow
import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import Button from 'components/Button';

type Props = {
  isInitial: boolean,
  running: boolean,
  onStop: Function,
  onStart: Function,
  onReset: Function,
  onAddLap: Function,
};

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 12px 0;
`;

const Controls = ({
  isInitial,
  running,
  onStop,
  onStart,
  onReset,
  onAddLap,
}: Props) => (
  <Wrapper>
    {running ? (
      <React.Fragment>
        <Button onClick={onAddLap}>Круг</Button>
        <Button onClick={onStop} variant="red">
          Стоп
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Button onClick={onReset} disabled={isInitial}>
          {isInitial ? 'Круг' : 'Сброс'}
        </Button>
        <Button onClick={onStart} variant="green">
          Старт
        </Button>
      </React.Fragment>
    )}
  </Wrapper>
);

export default pure(Controls);
