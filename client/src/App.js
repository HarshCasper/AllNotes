import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from "./Pages/UserProfile";
import profileData from "./Data/profileData.json";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Redirect to="/profile" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
