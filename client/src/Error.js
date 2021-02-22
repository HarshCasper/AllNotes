
//Add route for error page...
// <Route component = {error}>
// import Logo from '../logo.png';
import React from "react";
import {NavLink} from "react-router-dom";
import Logo from './design/error-screen/sreens/error-sreen-desktop.png'
const Error = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <>
        <div className="setStyle2">
            <h1 style={mystyle}>404 Error Page</h1>
            {/* <p>Sorry this page is not valid</p> */}
            <NavLink to ="/">Take Me Back To Where I Came From</NavLink>
            <img src = {Logo} width = "500" alt ="error-screen-desktop.png"/>   
        </div>
        </>
    );
};
export default Error;