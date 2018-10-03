// @flow
import { type Store } from 'redux';
import tickService from 'src/tick';

const subscriber = (store: Store): Function => {
  const dispatchTick = (tick: number) => {
    store.dispatch({
      type: 'STOPWATCH_TICK',
      tick,
    });
  };
  let prevEnabled;
  return () => {
    const {
      stopwatch: { enabled },
    } = store.getState();
    if (enabled && prevEnabled !== enabled) {
      tickService.subscribe(dispatchTick);
      prevEnabled = enabled;
    } else if (!enabled) {
      tickService.unsubscribe(dispatchTick);
      prevEnabled = enabled;
    }
  };
};

export default subscriber;
