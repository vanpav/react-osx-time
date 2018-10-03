// @flow

type RunActionType = {
  type: 'RUN',
};

type StopActionType = {
  type: 'STOP',
};

type ResetActionType = {
  type: 'RESET',
};

type AddLapActionType = {
  type: 'ADD_LAP',
};

export type ActionType =
  | RunActionType
  | StopActionType
  | ResetActionType
  | AddLapActionType;

export const start = (): RunActionType => ({
  type: 'RUN',
});

export const stop = (): StopActionType => ({
  type: 'STOP',
});

export const reset = (): ResetActionType => ({
  type: 'RESET',
});

export const addLap = (): AddLapActionType => ({
  type: 'ADD_LAP',
});
