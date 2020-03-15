import React, { useRef, useState, useEffect, useCallback } from "react";
import { render } from "react-dom";
import { useTransition, animated } from "react-spring";

import HomeDropIn from "./animation/homeDropIn";

const Home = props => {
  return (
    <React.Fragment>
      <div className="home-overlay"></div>
      <HomeDropIn />
      {/* <Transition /> */}
    </React.Fragment>
  );
};

export default Home;
