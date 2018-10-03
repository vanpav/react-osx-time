import React from 'react';
import { connect } from 'react-redux';
import Display from 'src/components/Display';
import TimeToString from 'src/components/TimeToString';

const TimerDisplay = ({ enabled, time }) => (
  <Display>
    {enabled && time > 0 ? (
      <TimeToString time={time} withMiliseconds={false} />
    ) : (
      <React.Fragment>
        <input type="number" />
        <input type="number" />
        <input type="number" />
      </React.Fragment>
    )}
  </Display>
);

const mapState = state => ({
  enabled: state.timer.enabled,
  time: state.timer.time,
});

export default connect(mapState)(TimerDisplay);
