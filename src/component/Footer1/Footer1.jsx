import React, { Component } from "react";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter, AiOutlineDribbble } from "react-icons/ai";
import "./footer1.scss";
export default class Footer1 extends Component {
  render() {
    return (
      <div className="parent">
        <div className="container">
          <div className="row">
            <div className="p-5 col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-center text-uppercase mb-4 fw-bold">
                Location
              </h4>
              <p className="text-center">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className="diff text-center p-5 col-lg-4 ">
              <h4 className="text-uppercase mb-4 fw-bold">Around the Web</h4>
              <a href="#!" className="text-center p-1">
                <GrFacebookOption className="icon text-white" />
              </a>
              <a href="#!" className="text-center p-1">
                <GrLinkedinOption className="icon text-white" />
              </a>
              <a href="#!" className="text-center p-1 ">
                <AiOutlineTwitter className="icon text-white" />
              </a>
              <a href="#!" className="text-center p-1">
                <AiOutlineDribbble className="icon text-white " />
              </a>
            </div>

            <div className="text-center pt-5 col-lg-4">
              <h4 className="text-uppercase fw-bold mb-4">About Freelancer</h4>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                 <a href="http://startbootstrap.com"> Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
