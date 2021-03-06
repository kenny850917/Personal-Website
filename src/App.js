import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" exact to="/home" />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
