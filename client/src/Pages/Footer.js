import React from "react";

import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row mb-0 mt-0">
        <div className="mb-0 mt-0 col-12 col-md-4 links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#"> Dashboard</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> Notes</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> Connect</a>{" "}
            </li>
          </ul>
        </div>
        <div className="mb-0 mt-0 col-12 col-md-4 contact">
          <h4>Contact Us</h4>
          <p></p>
          <li>
            <span className="fas fa-phone fa-lg"></span> 020 88292293
          </li>
          <li>
            <span className="fas fa-envelope fa-lg"></span> mrxyz@gmail.com
          </li>
        </div>
        <div className="mb-0 mt-0 col-12 col-md-4 newsletter">
          <h4>Subscribe to our newsletter</h4>
          <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
          <input type="text" placeholder="Enter Your Email" />
        </div>
      </div>

      <div className="row mb-0 mt-0 footer-content">
        <ul className="links">
          <li>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="row copyright mb-0 mt-0">
        <p>Copyright © 2020 ALL NOTES : Online Notes Solution</p>
      </div>
    </footer>
  );
}

export default Footer;
