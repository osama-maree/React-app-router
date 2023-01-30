import React, { Component } from "react";
import { HiStar } from "react-icons/hi";
import "./home.scss";
export default class Home extends Component {
  render() {
    return (
      <header className="text-white text-center">
        <div className="container">
          <img className="mb-4" src="assets/avataaars.svg" alt="..." />

          <h1 className="fw-bold">Start Bootstrap</h1>
          <div className="ic mb-4">
            <div className="linear"></div>
            <div className="icon">
              <HiStar className="icons"/>
            </div>
            <div className="linear"></div>
          </div>
          <p className="">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    );
  }
}
