// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Laps from './components/Laps';
import Counter from './components/Counter';
import Controls from './components/Controls';
import { Container, Wrapper, Scrollable } from './styles';
import { formatTimeString } from './utils';

type State = {
  time: number,
  running: boolean,
  laps: Array<number>,
  stored: {
    best: ?number,
    worst: ?number,
  },
};

const initialState = {
  time: 0,
  running: false,
  laps: [],
  stored: {
    best: null,
    worst: null,
  },
};

class Stopwatch extends Component<{ time: number }, State> {
  state = initialState;

  raf: AnimationFrameID;
  storedLaps: number;

  setTime = (tick: number) => {
    this.setState(({ time }) => ({
      time: time + tick,
    }));
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }

  handleStart = () => {
    const start = +new Date();
    let prevFrame = 0;
    const tick = () => {
      const now = +new Date();
      if (now - start - prevFrame > 20) {
        this.setTime(now - start - prevFrame);
        prevFrame = now - start;
      }
      this.raf = requestAnimationFrame(tick);
    };
    tick();
    this.setState({ running: true });
  };

  handleStop = () => {
    cancelAnimationFrame(this.raf);
    this.setState({
      running: false,
    });
  };

  handleReset = () => {
    this.handleStop();
    this.storedLaps = 0;
    this.setState({
      ...initialState,
    });
  };

  getBestAndWorstLap = (lastLap: number): Object => {
    let stored = { ...this.state.stored };
    if (!stored.best || lastLap < stored.best) {
      stored.best = lastLap;
    }
    if (!stored.worst || lastLap > stored.worst) {
      stored.worst = lastLap;
    }
    return stored;
  };

  handleAddLap = () => {
    this.setState(({ laps, time }) => {
      const allLapsTime = laps.reduce((acc, t) => acc + t, 0);
      const lastLap = time - allLapsTime;
      const stored = this.getBestAndWorstLap(lastLap);
      this.storedLaps = lastLap + allLapsTime;
      return {
        laps: [lastLap, ...laps],
        stored,
      };
    });
  };

  render() {
    const { running, laps, stored } = this.state;
    const { time } = this.props;
    const currentLap = time - (this.storedLaps || 0);
    const isInitial = time === initialState.time && !running;
    return (
      <Container>
        <Wrapper>
          <Counter timeString={formatTimeString(time)} />
          <Controls
            isInitial={isInitial}
            running={running}
            onStart={this.handleStart}
            onStop={this.handleStop}
            onReset={this.handleReset}
            onAddLap={this.handleAddLap}
          />
        </Wrapper>
        <Scrollable>
          <Laps
            isInitial={isInitial}
            currentLap={currentLap}
            bestLap={stored.best}
            worstLap={stored.worst}
            laps={laps}
          />
        </Scrollable>
      </Container>
    );
  }
}

const mapProps = ({ stopwatch }) => {
  return {
    time: stopwatch.time,
  };
};

export default connect(mapProps)(Stopwatch);
