import React, { useRef, useState, useEffect, useCallback } from "react";
import { render } from "react-dom";
import { useTransition, animated } from "react-spring";

import Transition from "./animation/transition";
import HomeDropIn from "./animation/homeDropIn";

const Home = props => {
  return (
    <React.Fragment>
      <div className="home-overlay"></div>
      {/* <h1 className="text-white">Hello I am Kenny Ho</h1>
      <h1 className="text-white">I am a </h1> */}
      <HomeDropIn className="main" />
      {/* <Transition /> */}
    </React.Fragment>
  );
};

export default Home;
