// @flow
import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import Button from 'src/components/Button';
import trans from 'src/translations';

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
        <Button onClick={onAddLap}>{trans('lap')}</Button>
        <Button onClick={onStop} variant="red">
          {trans('stop')}
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Button onClick={onReset} disabled={isInitial}>
          {isInitial ? trans('lap') : trans('reset')}
        </Button>
        <Button onClick={onStart} variant="green">
          {trans('start')}
        </Button>
      </React.Fragment>
    )}
  </Wrapper>
);

export default pure(Controls);
