// @flow
import { combineReducers } from 'redux';
import stopwatch from './stopwatch';
import timer from './timer';

export default combineReducers({ stopwatch, timer });
