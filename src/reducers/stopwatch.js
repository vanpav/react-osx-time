// @flow

type State = {
  +time: number,
  +running: boolean,
};

type TickAction = {
  type: 'TICK',
  tick: number,
};

type Action = TickAction;

const initialState = {
  time: 0,
  running: false,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        time: state.time + action.tick,
      };
    case 'RESET':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
