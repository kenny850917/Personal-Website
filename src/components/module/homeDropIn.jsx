import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import "./styles.css";

const introArray = ["Hello my name is", "Kenny Ho", "I am a...", " "];
const bodyArray = [
  "FullStack Developer",
  "Content Producer",
  "Web Designer",
  "Casual Gamer",
  "Computer Scientist"
];

const HomeDropIn = () => {
  const ref = useRef([]);
  const ref2 = useRef([]);
  const [items, set] = useState([]);
  const [items2, set2] = useState([]);
  //intro transition
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "translate3d(0%,100%,0) rotateY(0deg)",
      color: "#8fa5b6"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        transform: " translate3d(0,100%,0) rotateY(0deg)",
        color: "#28d79f"
      },
      { transform: "translate3d(0,0,0) rotateY(0deg)", color: "#f2f2f2" }
    ],
    // leave: [
    //   { color: "#c23369" },
    //   { innerHeight: 0 },
    //   { opacity: 0, height: 0 },
    //   { transform: "translate3d(0,0,0) rotateX(0deg)" }
    // ],
    update: { color: "#c23369" }
  });
  //content transition
  const contentTransitions = useTransition(items2, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "#28b4d7" }
  });

  const resetIntro = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([introArray[0]]), 1000));
    ref.current.push(setTimeout(() => set([introArray[1]]), 4000));
    ref.current.push(setTimeout(() => set([introArray[2]]), 8000));
    ref.current.push(setTimeout(() => set([introArray[3]]), 9000));
  }, []);

  const resetBody = useCallback(() => {
    ref2.current.map(clearTimeout);
    ref2.current = [];
    set2([]);
    ref2.current.push(
      setTimeout(() => set2([bodyArray[0], bodyArray[1], bodyArray[2]]), 11000)
    );
    ref2.current.push(
      setTimeout(() => set2([bodyArray[0], bodyArray[2]]), 14000)
    );
    ref2.current.push(
      setTimeout(
        () => set2([bodyArray[4], bodyArray[0], bodyArray[3], bodyArray[2]]),
        18000
      )
    );
  }, []);

  useEffect(() => void resetIntro(), []);
  useEffect(() => void resetBody(), []);

  return (
    <React.Fragment>
      <div className="container-lg">
        <div className="main">
          <div>
            {transitions.map(
              ({ item: intro, props: { innerHeight, ...rest }, key }) => (
                <animated.div
                  className="transitions-item"
                  key={key}
                  style={rest}
                >
                  <animated.div
                    style={{ overflow: "hidden", height: innerHeight }}
                  >
                    {intro}
                  </animated.div>
                </animated.div>
              )
            )}
          </div>
          {/* body content */}
          <div>
            {contentTransitions.map(
              ({ item: body, props: { innerHeight, ...rest }, key }) => (
                <animated.div
                  className="transitions-item"
                  key={key}
                  style={rest}
                  onClick={resetBody}
                >
                  <animated.div
                    style={{ overflow: "hidden", height: innerHeight }}
                  >
                    {body}
                  </animated.div>
                </animated.div>
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeDropIn;
