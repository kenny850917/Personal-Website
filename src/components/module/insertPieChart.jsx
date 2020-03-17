import React from "react";
import PieChart from "react-minimal-pie-chart";

const InsertPieChart = ({ title, percentage, color, content }) => {
  return (
    <React.Fragment>
      <div className="card border-secondary" id="card2">
        <PieChart
          animate={true}
          animationDuration={800}
          animationEasing="ease-in"
          cx={50}
          cy={50}
          data={[
            {
              color: color,
              title: title,
              value: percentage
            }
          ]}
          label={true}
          labelPosition={0}
          lengthAngle={360}
          lineWidth={15}
          onClick={undefined}
          onMouseOut={undefined}
          onMouseOver={undefined}
          paddingAngle={5}
          radius={50}
          rounded={false}
          startAngle={270}
          viewBoxSize={[100, 100]}
          reveal={percentage}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
      {/* <h1 className="text-center">{title}</h1> */}
    </React.Fragment>
  );
};

export default InsertPieChart;
