// @flow
import { type Store } from 'redux';
import tickService from 'src/tick';

const subscriber = (store: Store): Function => {
  const dispatchTick = (tick: number) => {
    store.dispatch({
      type: 'TIMER_TICK',
      tick,
    });
  };
  let prevEnabled;
  return () => {
    const {
      timer: { enabled, time },
    } = store.getState();
    if (enabled && prevEnabled !== enabled && time > 0) {
      tickService.subscribe(dispatchTick);
      prevEnabled = enabled;
    } else if (!enabled && time <= 0) {
      tickService.unsubscribe(dispatchTick);
      prevEnabled = enabled;
    }
  };
};

export default subscriber;
