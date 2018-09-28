import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import Stopwatch from 'src/components/Stopwatch';
import Timer from 'src/components/Timer';

const sections = [
  {
    path: '/stopwatch',
    icon: 'stopwatch',
    title: 'Секундомер',
    component: Stopwatch,
  },
  {
    path: '/timer',
    icon: 'timer',
    title: 'Таймер',
    component: Timer,
  },
];

const Routes = () => {
  return (
    <Layout sections={sections}>
      <Switch>
        {sections.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
        <Redirect from={'/'} to={sections[0].path} />
      </Switch>
    </Layout>
  );
};

export default Routes;
