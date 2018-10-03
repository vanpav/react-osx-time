// @flow
import React from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/Button/index';
import trans from 'src/translations';
import { isInitialSelector } from 'src/selectors/stopwatch';
import { start, stop, reset, addLap } from 'src/actions/stopwatch';
import { ControlsContainer } from './styles';

type Props = {
  isInitial: boolean,
  enabled: boolean,
  stop: Function,
  start: Function,
  reset: Function,
  addLap: Function,
};

const StopwatchControls = ({
  isInitial,
  enabled,
  stop,
  start,
  reset,
  addLap,
}: Props) => (
  <ControlsContainer>
    {enabled ? (
      <React.Fragment>
        <Button onClick={addLap}>{trans('lap')}</Button>
        <Button onClick={stop} variant="red">
          {trans('stop')}
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Button onClick={reset} disabled={isInitial}>
          {isInitial ? trans('lap') : trans('reset')}
        </Button>
        <Button onClick={start} variant="green">
          {trans('start')}
        </Button>
      </React.Fragment>
    )}
  </ControlsContainer>
);

const mapState = state => ({
  enabled: state.stopwatch.enabled,
  isInitial: isInitialSelector(state),
});

const mapDispatch = {
  start,
  stop,
  reset,
  addLap,
};

export default connect(
  mapState,
  mapDispatch
)(StopwatchControls);
