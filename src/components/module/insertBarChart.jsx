import React from "react";
import "./styles.scss";

const InsertBarChart = ({ program, percentage }) => {
  return (
    <React.Fragment>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: percentage + "%" }}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {program} {percentage}%
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsertBarChart;
