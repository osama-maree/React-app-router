import React, { Component } from "react";
import { HiStar } from "react-icons/hi";

import "./portfolio.scss";
export default class Portfolio extends Component {
  render() {
    const assets = [
      "assets/cabin.png",
      "assets/cake.png",
      "assets/circus.png",
      "assets/game.png",
      "assets/safe.png",
      "assets/submarine.png",
    ];

    return (
      <section className="pb-5">
        <div className="container pt-5 mb-5">
          <h2 className="text-center fw-bold mt-4">Portfolio</h2>
          <div className="ic mb-4">
            <div className="linear"></div>
            <div className="icon">
              <HiStar className="icons" />
            </div>
            <div className="linear"></div>
          </div>

          <div className="row justify-content-center">
            {assets.map((item) => (
              <div className="col-md-6 col-lg-4 mt-4">
                <div className="cont1">
                  <img className="img-fluid" src={item} alt="..." />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
