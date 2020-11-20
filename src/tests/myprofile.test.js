import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import MyProfile from './myprofile';

test('renders my profile page', () => {
  const component = render(<Router><MyProfile /></Router>);
  expect(component).toMatchSnapshot();
});
