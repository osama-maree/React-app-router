import React, { Component } from "react";
import { HiStar } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import "./about.scss";
export default class About extends Component {
  render() {
    return (
      <div className="parent1 pt-4 pb-5">
        <div className="container">
          <h2 className="text-center fw-bold text-white pt-5  mb-3">About</h2>
          <div className="icc mb-4 mt-3">
            <div className="linear"></div>
            <div className="icon">
              <HiStar className="icons" />
            </div>
            <div className="linear"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="text-white">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>

          <div className="text-center mt-5 pb-5">
            <a
              className="text-white"
              href="https://startbootstrap.com/theme/freelancer/"
            >
              <FaDownload className="fas fa-download me-2" />
              Free Download!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
