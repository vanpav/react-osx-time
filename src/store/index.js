// @flow
import { createStore } from 'redux';
import reducers from 'src/reducers';

const noop = () => {};

const reduxDevtools =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__) ||
  noop;

const initStore = (initialState: {} = {}) => {
  return createStore(reducers, initialState, reduxDevtools());
};

export default initStore;
