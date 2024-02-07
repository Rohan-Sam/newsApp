import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export class Navbar extends Component {

  handleCountryChange = (e) => {
    // Add your logic to update the selected country and trigger news fetching
    this.props.onCountryChange(e.target.value);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Slash
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
              {/* Add the following dropdown for selecting countries */}
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={this.handleCountryChange}
              >
                <option value="in">India</option>
                <option value="us">United States</option>
                {/* Add more options as needed */}
              </select>
            </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
