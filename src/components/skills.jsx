import React from "react";
import InsertPieChart from "./animation/insertPieChart";
import "./components.css";

const Skills = () => {
  // skills
  const java = ["Java", 80, "#c23369"];
  const javascript = ["JS", 85, "#c23369"];
  const mySql = ["MySQL", 75, "#c23369"];
  const php = ["PHP", 82, "#c23369"];
  const python = ["Python", 65, "#c23369"];
  const htmlCss = ["HTML+CSS", 85, "#c23369"];
  // learning
  const react = ["React", 85, "#8fa5b6"];
  const mongoDb = ["MongoDB", 30, "#8fa5b6"];
  const nodeJs = ["Node.js", 20, "#8fa5b6"];
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm">
          <h1 className="text-center">Skills</h1>
        </div>
      </div>
      {/* first row */}
      <div className="row">
        <div className="col-sm">
          <InsertPieChart
            title={java[0]}
            percentage={java[1]}
            reveal={java[1]}
            color={java[2]}
            content={java[3]}
          />
        </div>
        <div className="col-sm">
          <InsertPieChart
            title={javascript[0]}
            percentage={javascript[1]}
            reveal={javascript[1]}
            color={javascript[2]}
          />
        </div>
        <div className="col-sm">
          <InsertPieChart
            title={mySql[0]}
            percentage={mySql[1]}
            reveal={mySql[1]}
            color={mySql[2]}
          />
        </div>
        <div className="col-sm">
          <InsertPieChart
            title={php[0]}
            percentage={php[1]}
            reveal={php[1]}
            color={php[2]}
          />
        </div>
      </div>
      {/* learning row */}
      <div className="row">
        <div className="col-sm">
          <h1 className="text-center">Learning </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
