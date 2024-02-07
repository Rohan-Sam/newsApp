// API exact path="" key: 06ea853b3b1f4df88d72933a456d75f9

import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from "react";

export default class App extends Component {

  pageSize = 9

  constructor() {
    super();
    this.state = {
      selectedCountry: "in", // Default country
    };
  }

  handleCountryChange = (selectedCountry) => {
    this.setState({ selectedCountry });
  };


  render() {
    return (
      <div>
        <Router>
          <Navbar onCountryChange={this.handleCountryChange}/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.pageSize}
                  country={this.state.selectedCountry}
                  category="general"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
