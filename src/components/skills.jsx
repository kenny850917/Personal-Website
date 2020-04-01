import React from "react";
import InsertPieChart from "./module/insertPieChart";
import "./components.css";
import InsertBarChart from "./module/insertBarChart";

const Skills = () => {
  // skills
  const programming = ["Programming", 85, "#c23369"];
  const designing = ["Designing", 90, "#c23369"];
  const debugging = ["Degugging", 68, "#c23369"];
  const creativity = ["Creativity", 89, "#c23369"];
  //programs
  const java = [80, "Java"];
  const javascript = [70, "JavaScript"];
  const mySQL = [70, "MySql"];
  const htmlCss = [90, "HTML + CSS"];
  const php = [75, "MySql"];
  //tools
  const github = [90, "GitHub"];
  const bootstrap = [73, "Bootstrap"];
  const photoshop = [91, "PhotoShop"];
  const vsStudio = [90, "VS-Studio"];
  const travisCI = [55, "Travis-CI"];

  return (
    <React.Fragment>
      <div className="container-lg">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center" id="skill">
              Skills
            </h1>
          </div>
        </div>
        {/* first row */}
        <div className="row">
          <div className="col-lg">
            <InsertPieChart
              title={programming[0]}
              percentage={programming[1]}
              reveal={programming[1]}
              color={programming[2]}
            />
          </div>
          <div className="col-lg">
            <InsertPieChart
              title={designing[0]}
              percentage={designing[1]}
              reveal={designing[1]}
              color={designing[2]}
            />
          </div>
          <div className="col-lg">
            <InsertPieChart
              title={debugging[0]}
              percentage={debugging[1]}
              reveal={debugging[1]}
              color={debugging[2]}
            />
          </div>
          <div className="col-lg">
            <InsertPieChart
              title={creativity[0]}
              percentage={creativity[1]}
              reveal={creativity[1]}
              color={creativity[2]}
            />
          </div>
        </div>
        {/* bar row, 1st col programs, 2nd col tools */}
        <div className="row">
          <div className="col-lg">
            <h1 className="text-center">Languages </h1>
          </div>
          <div className="col-lg">
            <h1 className="text-center">Tools </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <InsertBarChart percentage={java[0]} program={java[1]} />
          </div>
          <div className="col-lg">
            <InsertBarChart percentage={github[0]} program={github[1]} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <InsertBarChart
              percentage={javascript[0]}
              program={javascript[1]}
            />
          </div>
          <div className="col-lg">
            <InsertBarChart percentage={bootstrap[0]} program={bootstrap[1]} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <InsertBarChart percentage={mySQL[0]} program={mySQL[1]} />
          </div>
          <div className="col-lg">
            <InsertBarChart percentage={photoshop[0]} program={photoshop[1]} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <InsertBarChart percentage={php[0]} program={php[1]} />
          </div>
          <div className="col-lg">
            <InsertBarChart percentage={vsStudio[0]} program={vsStudio[1]} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <InsertBarChart percentage={htmlCss[0]} program={htmlCss[1]} />
          </div>
          <div className="col-lg">
            <InsertBarChart percentage={travisCI[0]} program={travisCI[1]} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
