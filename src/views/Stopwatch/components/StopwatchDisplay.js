// @flow
import React from 'react';
import { connect } from 'react-redux';
import TimeToString from 'src/components/TimeToString/index';
import Display from 'src/components/Display';

const mapState = ({ stopwatch: { time } }) => ({
  time: time,
});

const ConnectedTimeString = connect(mapState)(TimeToString);

const StopwatchDisplay = () => (
  <Display>
    <ConnectedTimeString />
  </Display>
);

export default StopwatchDisplay;
