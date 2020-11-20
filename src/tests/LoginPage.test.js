import React from 'react';
import LoginPopup from '../components/loginPopup';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen, fireEvent } from '@testing-library/react';
import ProfilePicturePopUp from '../components/ProfilePicturePopUp';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import app from '../config/firebase.js'
import { firebase, auth, signInWithEmailAndPassword, signOutFirebase, init, isAuthenticated, getIdToken } from 'firebase';

configure({ adapter: new Adapter() })

test('Match login popup render with snapshot without component', () => {
    const LoginPopupComponent = shallow(<LoginPopup />);
    expect(LoginPopupComponent).toMatchSnapshot();
});

test('Match login popup render with snapshot with component', () => {
   const props = {
           component: () => {}
        }
    const LoginPopupComponent = shallow(<LoginPopup {...props}/>);
    expect(LoginPopupComponent).toMatchSnapshot();
});

test('Test submit button cannot work if not clicked', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button className="Login-Button">Login</button>));
    expect(mockCallBack.mock.calls.length).toEqual(0);
});

test('Test click event can work when clicked', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button onClick={mockCallBack} className="Login-Button">Login</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
});


test('Login with unregistered email and password', async () => {
      let error = '';
      try {
        await app.auth().signInWithEmailAndPassword('test@gmail.com', '1');
      } catch (err) {
        error = err.toString();
      }
      expect(error).toEqual(
        `Error: There is no user record corresponding to this identifier. The user may have been deleted.`
      );
});

test('Login with nothing entered for both fields', async () => {
      let error = '';
      try {
        await app.auth().signInWithEmailAndPassword('', '');
      } catch (err) {
        error = err.toString();
      }
      expect(error).toEqual(
        `Error: The email address is badly formatted.`
      );
});

test('Login with only email entered', async () => {
      let error = '';
      try {
        await app.auth().signInWithEmailAndPassword('testuser@gmail.com', '');
      } catch (err) {
        error = err.toString();
      }
      expect(error).toEqual(
        `Error: The password is invalid or the user does not have a password.`
      );
});

test('Login with only password entered', async () => {
      let error = '';
      try {
        await app.auth().signInWithEmailAndPassword('', 'password1');
      } catch (err) {
        error = err.toString();
      }
      expect(error).toEqual(
        `Error: The email address is badly formatted.`
      );
});

test('Check that signout function works', async () => {
      let error = undefined;
      try {
      app.auth().signOut();
    } catch (err) {
        error = err.toString();
    }
});

test('Login with correct email and password', async () => {
      let error = '';
      await app.auth().signInWithEmailAndPassword('thanesh.pannir@gmail.com', 'workfolio');
      expect(isAuthenticated()).toBeTruthy();
});
