import React, { Component } from "react";
import { Route, Routes } from "react-router";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Footer1 from "./component/Footer1/Footer1";
import Home from "./component/home/Home";
import Navbar from "./component/Navbar.jsx/Navbar";
import Portfolio from "./component/portflolio/Portfolio";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer1/>
        <Footer />
      </div>
    );
  }
}
