import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage.js';
import Work from './routes/work.js';
import MainLoyout from './components/Layout/MainLayout.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLoyout} >
        <Route path="work" component={Work} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
