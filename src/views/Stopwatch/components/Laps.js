// @flow
import React from 'react';
import { connect } from 'react-redux';
import { List } from './styles';
import { type LapType } from 'src/reducers/stopwatch';
import Lap from './Lap';
import {
  lapsSelector,
  lapsTotalSelector,
  isInitialSelector,
} from 'src/selectors/stopwatch';

type LapsPropsType = {
  isInitial: boolean,
  laps: Array<LapType>,
  best?: LapType,
  worst?: LapType,
};

const CurrentLap = connect(state => ({
  time: state.stopwatch.time - lapsTotalSelector(state),
}))(Lap);

const compareObjId = (obj, id) => obj && obj.id === id;

const Laps = ({ laps, isInitial, best, worst }: LapsPropsType) => {
  const length = laps.length;
  const showBestOrWorst = length > 1;
  return (
    <List>
      {!isInitial && <CurrentLap id={length + 1} />}
      {laps &&
        laps.map(({ id, time }) => (
          <Lap
            key={id}
            id={id}
            time={time}
            isBest={showBestOrWorst && compareObjId(best, id)}
            isWorst={showBestOrWorst && compareObjId(worst, id)}
          />
        ))}
    </List>
  );
};

const mapState = state => ({
  laps: lapsSelector(state),
  isInitial: isInitialSelector(state),
  best: state.stopwatch.best,
  worst: state.stopwatch.worst,
});

export default connect(mapState)(Laps);
