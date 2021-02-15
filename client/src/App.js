import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Profile from "./Pages/UserProfile";
import profileData from "./Data/profileData.json";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Profile} />
        <Redirect to="/dashboard" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
