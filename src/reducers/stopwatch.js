// @flow
import { lapsTotalSelector } from 'src/selectors/stopwatch';
import type { ActionType } from 'src/actions/stopwatch';

export type LapType = {
  id: number,
  time: number,
};

type StateType = {
  +time: number,
  +enabled: boolean,
  +laps: Array<LapType>,
  +best: ?LapType,
  +worst: ?LapType,
};

const initialState = {
  time: 0,
  enabled: false,
  laps: [],
  best: null,
  worst: null,
};

let nextLapId = 0;

const updateBestAndWorst = (state, lap) => {
  const best = state.best && state.best.time < lap.time ? state.best : lap;
  const worst = state.worst && state.worst.time > lap.time ? state.worst : lap;
  return {
    best,
    worst,
  };
};

const stopwatchReducer = (
  state: StateType = initialState,
  action: ActionType
): StateType => {
  switch (action.type) {
    case 'RUN':
      return {
        ...state,
        enabled: true,
      };
    case 'STOP':
      return {
        ...state,
        enabled: false,
      };
    case 'RESET':
      nextLapId = 0;
      return {
        ...initialState,
      };
    case 'ADD_LAP':
      const allLapsTime = lapsTotalSelector({ stopwatch: state });
      const lap = { id: ++nextLapId, time: state.time - allLapsTime };
      return {
        ...state,
        laps: [lap, ...state.laps],
        ...updateBestAndWorst(state, lap),
      };
    case 'STOPWATCH_TICK':
      return {
        ...state,
        time: state.time + action.tick,
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
