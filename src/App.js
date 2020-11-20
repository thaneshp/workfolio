import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";

import Navbar from './components/navbar';
import Slider from './components/slider';
import LoginPopup from './components/loginPopup';
import SignUpPopup from './components/signUpPopup';
import Footer from './components/footer';
import Profile from './profile';
import ProfilePage from './components/myprofile';
import HomePage from './HomePage';

//Imports for user authentication
import { AuthProvider } from "./Auth";
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
        <Navbar />

          <Switch>
            <PrivateRoute exact path = "/profile" component={ProfilePage}/>
            <Route exact path = "/" component={HomePage}/>
            <Route exact path="/sign-up" component={SignUpPopup} />
            <Route exact path="/login" component={LoginPopup} />
          </Switch>

        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
