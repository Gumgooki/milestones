import React from "react";
import MilestoneOverdue from "./MilestoneOverdue";

const MilestoneCal = () => {
  return (
    <div className="MilestoneCal">
      <div className="CalendarObj">
        <MilestoneOverdue />
        <div className="MonthCont">
          <h4>JAN</h4>
        </div>
        <div className="DayCont">
          <h4>31</h4>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCal;
