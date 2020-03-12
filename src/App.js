import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/project";
import Resume from "./components/resume";
import Contact from "./components/contact";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <main className="container-xl">
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Redirect from="/" exact to="/" />
            <Redirect to="/not-found" />
          </main>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
