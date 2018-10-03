import { createSelector } from 'reselect';

export const lapsSelector = state => state.stopwatch.laps;
export const timeSelector = state => state.stopwatch.time;

export const lapsTotalSelector = createSelector([lapsSelector], laps => {
  return laps.reduce((acc, lap) => acc + lap.time, 0);
});

export const isInitialSelector = createSelector(
  timeSelector,
  time => time === 0
);
