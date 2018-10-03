import React from 'react';
import { connect } from 'react-redux';
import Button from 'src/components/Button';
import { ControlsContainer } from 'src/views/Stopwatch/components/styles';
import trans from 'src/translations';

const TimerControls = ({ enabled, start, stop, cancel }) => (
  <ControlsContainer>
    <Button onClick={cancel}>Отмена</Button>
    {enabled ? (
      <Button onClick={stop} variant="orange">
        {trans('stop')}
      </Button>
    ) : (
      <Button onClick={start} variant="green">
        {trans('start')}
      </Button>
    )}
    {/*Пауза Ж и Дальше З*/}
  </ControlsContainer>
);

const mapState = state => ({
  enabled: state.timer.enabled,
});

const mapDispatch = dispatch => ({
  start: () => dispatch({ type: 'SET', time: 5000 }),
  stop: () => dispatch({ type: 'STOP' }),
  cancel: () => dispatch({ type: 'CANCEL ' }),
});

export default connect(
  mapState,
  mapDispatch
)(TimerControls);
