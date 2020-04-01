import React, { useRef, useState, useEffect, useCallback } from "react";
import Footer from "./footer";
import { render } from "react-dom";
import { useTransition, animated } from "react-spring";
import HomeDropIn from "./module/homeDropIn";

const Home = props => {
  return (
    <React.Fragment>
      <div className="home-overlay"></div>
      <HomeDropIn />
      <Footer />
      {/* <Transition /> */}
    </React.Fragment>
  );
};

export default Home;
