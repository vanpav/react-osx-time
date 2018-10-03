// @flow

type StateType = {
  +time: number,
  +enabled: boolean,
};

const initialState = {
  time: 0,
  enabled: false,
};

const TimerReducer = (state: StateType = initialState, action: any) => {
  switch (action.type) {
    case 'TIMER_TICK':
      return { ...state, time: state.time - action.tick };
    case 'SET':
      console.log(action);
      return {
        ...state,
        time: state.time > 0 ? state.time : action.time,
        enabled: true,
      };
    case 'STOP':
      return {
        ...state,
        enabled: false,
      };
    case 'CANCEL':
      return { ...initialState };
    default:
      return state;
  }
};

export default TimerReducer;
