import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Option1 from './option1';
import Option2 from './option2';
import Option3 from './option3';
import Option4 from './option4';
import Option5 from './option5';
import Option6 from './option6';
import Option7 from './option7';

//Function created to switch between skill options shown on the profile page
const Option = () => (
  <Switch>
    <Route exact path="/" component={Option1} />
    <Route path="/option1" component={Option1} />
    <Route path="/option2" component={Option2} />
    <Route path="/option3" component={Option3} />
    <Route path="/option4" component={Option4} />
    <Route path="/option5" component={Option5} />
    <Route path="/option6" component={Option6} />
    <Route path="/option7" component={Option7} />
  </Switch>
)

export default Option;
