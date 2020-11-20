import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen, fireEvent } from '@testing-library/react';
import ProfilePicturePopUp from '../components/ProfilePicturePopUp';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import app from '../config/firebase.js'
import { firebase, auth, createUserWithEmailAndPassword, signOutFirebase, init, isAuthenticated, getIdToken } from 'firebase';
import signUpPopup from '../components/signUpPopup';

configure({ adapter: new Adapter() })

test("Components test", () => {
  const component = render(<signUp />);
  expect(component).toMatchSnapshot();
});

test('Signup with registered email', async () => {
    let error = '';
    try {
      await app.auth().createUserWithEmailAndPassword("ainunnishat1997@gmail.com", "abcdef")} 
      catch (err) {
      error = err.message;
    }
    expect(error).toEqual(
      `The email address is already in use by another account.`
    );
});


test('Signup with invalid password', async () => {
    let error = "";
    try {
      await app.auth().createUserWithEmailAndPassword("ainunnishat1997@gmail.com", "w")} 
      catch (err) {
      error = err.message;
    }
    expect(error).toEqual(
        "Password should be at least 6 characters"
    );
});

test('Bad email Address', async () => {
    let error = '';
    try {
      await app.auth().createUserWithEmailAndPassword("gmail.com", "w")} 
      catch (err) {
      error = err.message;
    }
    expect(error).toEqual(
        "The email address is badly formatted."
    );
});



test('Signup with nothing entered for both fields', async () => {
    let error = '';
    try {
      await app.auth().createUserWithEmailAndPassword('', '');
    } catch (err) {
      error = err.message;
    }
    expect(error).toEqual(
      "The email address is badly formatted."
    );
});

test('Signup with only email entered', async () => {
    let error = '';
    try {
      await app.auth().createUserWithEmailAndPassword('testuser@gmail.com', '');
    } catch (err) {
      error = err.message;
    }
    expect(error).toEqual(
      "The password must be 6 characters long or more."
    );
});

test('Signup with only password entered', async () => {
    let error = '';
    try {
      await app.auth().createUserWithEmailAndPassword('', 'password1');
    } catch (err) {
      error = err.message;
    }
    expect(error).toEqual(
      "The email address is badly formatted."
    );
});