// @flow
import React, { Component } from 'react';
import { pure } from 'recompose';
import { List } from './styles';
import Lap from './Lap';

type Props = {
  isInitial: boolean,
  laps: Array<number>,
  currentLap: number,
  bestLap: ?number,
  worstLap: ?number,
};

class Laps extends Component<Props> {
  isBestOrWorst = (lap: number): 0 | 1 | -1 => {
    if (this.props.laps.length < 2) return 0;
    const { bestLap, worstLap } = this.props;
    return bestLap === lap ? 1 : worstLap === lap ? -1 : 0;
  };

  render() {
    const { laps, currentLap, isInitial } = this.props;
    const lastLapId = laps.length;
    return (
      <List>
        {!isInitial && <Lap lap={currentLap} lapID={lastLapId + 1} />}
        {laps &&
          laps.map((lap, index) => (
            <Lap
              key={`${lap}-${lastLapId - index}`}
              lap={lap}
              lapID={lastLapId - index}
              quality={this.isBestOrWorst(lap)}
            />
          ))}
      </List>
    );
  }
}

export default pure(Laps);
