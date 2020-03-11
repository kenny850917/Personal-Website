import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./components/about";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/home" component={About} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={About} />
            <Route path="/work" component={About} />
            <Route path="/contact" component={About} />
            <Redirect from="/" exact to="/" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
