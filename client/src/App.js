import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Row,Col} from 'react-bootstrap';
import Login from "./components/LoginComponent";
import SignUp from "./components/SignupComponent";

function App() {
  return (<Router>
    <div className="App">
<div className="auth-wrapper">
        <div className="auth-inner">     
       
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
