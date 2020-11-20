import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import MyProfile from './myprofile';
import Alerts from './alerts';
import Contact from './contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/myprofile" component={MyProfile} />
    <Route path="/alerts" component={Alerts} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
