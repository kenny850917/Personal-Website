import React, { useRef, useState, useEffect, useCallback } from "react";
import Footer from "./footer";
import { render } from "react-dom";
import { useTransition, animated } from "react-spring";
import HomeDropIn from "./module/homeDropIn";
import "./home.scss";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home-overlay"></div>
      <HomeDropIn />
      <Footer type={"fixed"} />
      {/* <Transition /> */}
    </React.Fragment>
  );
};

export default Home;
