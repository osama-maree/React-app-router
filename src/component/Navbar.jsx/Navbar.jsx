import React, { Component } from "react";
import { Link } from "react-router-dom";
import {BsList} from 'react-icons/bs'
import "./navbar.scss";
export default class Navbar extends Component {
  state = {
    f1: false,
    f2: false,
    f3: false,
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container pt-2 pb-2">
          <Link className="navbar-brand text-white fw-bold" to="/">
            BOOTSTRAB
          </Link>
          <button
            className="navbar-toggler text-white text-uppercase"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            menu
            <BsList className="here"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/portfolio">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/about">
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
