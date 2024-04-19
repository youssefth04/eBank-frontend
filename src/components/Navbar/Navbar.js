import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              <li>
                <a href="myaccount/dashboard">
                  <img src="../../../../img/hh.png" className="logo" alt="logohome" />
                </a>
              </li>
              <li><a href="dashboard">Home</a></li>
              <li><a href="transfer">send</a></li>
              <li><a href="wallet">wallet</a></li>
              <li><a href="#three">activity</a></li>
              <li className="notification1">
                <a href="#three">
                  <img src="../../../../img/téléchargement-removebg-preview.png" alt="notification" />
                </a>
              </li>
              <li className="notification">
                <a href="#three">
                  <img src="../../../../img/images-removebg-preview.png" alt="settings" />
                </a>
              </li>
              <li>
                <a href="#three">
                  <button className="logout-btn">log out</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default Navbar;