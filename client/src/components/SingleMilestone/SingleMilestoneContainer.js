import React from "react";
import MilestoneCal from "./MilestoneCal";

const SingleMilestoneContainer = (props) => {
  return (
    <div className="SingleMilestoneContainer">
      <MilestoneCal />
      <h3>{props.description}</h3>
    </div>
  );
};

export default SingleMilestoneContainer;
