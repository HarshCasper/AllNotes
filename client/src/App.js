import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from "./Pages/UserProfile";
import profileData from "./Data/profileData.json";
import "./styles.css";
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;