/**
		src/pages/index.js
		Navigation Bar {React} component definition


*/
import React from "react";
import { Link } from "gatsby";
import Icon from "@mdi/react";
import { mdiCloudBraces, mdiHome } from "@mdi/js";


import github from "../img/github-icon.svg";
// import logo from "../img/iot.png";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
                <Icon className="navlogoico" path={mdi-mixcloud} size={2.3} />
                <h1 className="logotxt">IoT Innovations</h1>
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-right">{/*Start*/}</div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item is-size-7" to="/">
                <Icon className="verticle has-text-primary	" path={mdiHome} size={1.5} />
                <p>Home</p>
              </Link>
              <Link className="navbar-item is-size-7" to="/about">
                About
              </Link>
              <Link className="navbar-item is-size-7" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item is-size-7" to="/blog">
                Blog
              </Link>
              <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};
export default Navbar;
