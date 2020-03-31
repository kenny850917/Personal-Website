import React from "react";
import { useSpring, animated } from "react-spring";
import { Global } from "./module/treeStyle";
import Tree from "./module/tree";

const root = "About Me";
const type = ["Education", "Experiences", "Resume"];

const edu = {
  intro: ["🎓 University of British Columbia", "📚 Related Courses"],

  course: [
    "🤖 Artificial Intelligence",
    "📊 Data Structure",
    "🖧 Networking",
    "🚧 Project Management"
  ]
};
const exp = {
  name: ["Full-stack Developer", "Inventory Management"],
  details: [
    "🏴󠁬󠁲󠁧󠁰󠁿 with UBC<=>Start Fresh Kitchen @ Kelowna, BC",
    "🏴󠁬󠁲󠁧󠁰󠁿 with NCIX@ Burnaby, BC"
  ]
};

const resume = {
  link: ["📜 resume link"]
};

const About = () => {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" }
    ],
    from: { opacity: 0, color: "red" }
  });
  // ...
  return (
    <React.Fragment>
      <div className="home-overlay"></div>
      <div className="container sm">
        <Tree name={root} defaultOpen>
          {/* edu */}
          <Tree name={type[0]}>
            <Tree name={edu.intro[0]} />
            <Tree name={edu.intro[1]}>
              <Tree name={edu.course[0]}></Tree>
              <Tree name={edu.course[1]}></Tree>
              <Tree name={edu.course[2]}></Tree>
              <Tree name={edu.course[3]}></Tree>
            </Tree>
          </Tree>
          {/* exp */}
          <Tree name={type[1]}>
            <Tree name={exp.name[0]}>
              <Tree name={exp.details[0]}></Tree>
            </Tree>
            <Tree name={exp.name[1]}>
              <Tree name={exp.details[1]}></Tree>
            </Tree>
          </Tree>
          {/* resume */}
          <Tree name={type[2]}>
            <Tree name={resume.link[0]}></Tree>
          </Tree>

          {/* end of root */}
        </Tree>
      </div>
    </React.Fragment>
  );
};

export default About;
