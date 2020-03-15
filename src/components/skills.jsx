import React from "react";
import InsertPieChart from "./animation/insertPieChart";

const Skills = () => {
  const array = ["title", 90, "#c23369"];
  return (
    <div className="row">
      <div className="col-sm">
        <React.Fragment>
          <InsertPieChart
            title={array[0]}
            percentage={array[1]}
            reveal={array[1]}
            color={array[2]}
          />
        </React.Fragment>
      </div>
      <div className="col-sm">
        <React.Fragment>
          <InsertPieChart
            title={array[0]}
            percentage={array[1]}
            reveal={array[1]}
            color={array[2]}
          />
        </React.Fragment>
      </div>
      <div className="col-sm">
        <React.Fragment>
          <InsertPieChart
            title={array[0]}
            percentage={array[1]}
            reveal={array[1]}
            color={array[2]}
          />
        </React.Fragment>
      </div>
      <div className="col-sm">
        <React.Fragment>
          <InsertPieChart
            title={array[0]}
            percentage={array[1]}
            reveal={array[1]}
            color={array[2]}
          />
        </React.Fragment>
      </div>
    </div>
  );
};

export default Skills;
