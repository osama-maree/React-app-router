import React, { Component } from "react";
import { HiStar } from "react-icons/hi";
import "./contact.scss";
import Swal from "sweetalert2";
export default class Contact extends Component {
  state = {
    f: false,
    f2: false,
    f3: false,
    f4: false,
  };

  render() {
    const handelName = (e, p) => {
      if (e.match(p)) {
        this.state = { ...this.state, f: true };
      }
    };
    const handelphone = (e, p) => {
      if (e.match(p)) {
        this.state = { ...this.state, f2: true };
      }
    };
    const handelemail = (e, p) => {
      if (e.match(p)) {
        this.state = { ...this.state, f3: true };
      }
    };
    const handelmessgae = (e) => {
      if (e) {
        this.state = { ...this.state, f4: true };
      }
    };
    const handel = (e) => {
      e.preventDefault();
      if (this.state.f && this.state.f2 && this.state.f3 && this.state.f4) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Saved data",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };
    return (
      <section>
        <div className="container">
          <h2 className="text-center text-uppercase">Contact Me</h2>

          <div className="ic mb-4 mt-3">
            <div className="linear"></div>
            <div className="icon">
              <HiStar className="icons" />
            </div>
            <div className="linear"></div>
          </div>
          <div className="row g-3 justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form className="was-validated">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="name"
                    id="uname"
                    placeholder="Enter username"
                    pattern="^[A-Za-z][A-Za-z0-9_]{7,29}$"
                    required
                    onChange={(e) =>
                      handelName(e.target.value, "^[A-Za-z][A-Za-z0-9_]{7,29}$")
                    }
                  />
                  <label htmlFor="uname">Username:</label>

                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                  <div className="valid-feedback">Valid.</div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                    required
                    onChange={(e) =>
                      handelemail(e.target.value, "[a-z0-9]+@[a-z]+.[a-z]{2,3}")
                    }
                  />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback">An email is required.</div>
                  <div className="invalid-feedback">Email is not valid.</div>
                  <div className="valid-feedback">Correct.</div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    required
                    onChange={(e) =>
                      handelphone(
                        e.target.value,
                        "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
                      )
                    }
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div className="invalid-feedback">
                    A phone number is required.
                  </div>
                  <div className="valid-feedback">valid.</div>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    id="message"
                    className="form-control"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    required
                    onChange={(e) => handelmessgae(e.target.value)}
                  />
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback">A message is required.</div>
                </div>

                <button
                  className="btn btn-primary btn-xl mb-4"
                  id="submitButton"
                  type="submit"
                  onClick={(e)=>handel(e)}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
