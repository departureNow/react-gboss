/**
 * 入口js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd-mobile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './containers/login/login';
import Register from './containers/register/register';
import Dashboard from './containers/dashboard/dashboard';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Route component={Dashboard}></Route>  {/*默认路由组件*/}
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));