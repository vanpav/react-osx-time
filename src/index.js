import React, { type Node } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles';
import Routes from './routes';
import initStore from './store';
import stopwatchSubscriber from './views/Stopwatch/storeSubscriber';
import timerSubscriber from './views/Timer/storeSubscriber';
import registerServiceWorker from './registerServiceWorker';

const store = initStore();
store.subscribe(stopwatchSubscriber(store));
store.subscribe(timerSubscriber(store));

const App = (): Node => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
