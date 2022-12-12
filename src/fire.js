import React, { Component } from 'react';
import './App.css';
import firebaseConfig  from './firebaseConfig';
import firebaseui from "firebaseui";
import firebase from "firebase";

class App extends Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}

export default App;