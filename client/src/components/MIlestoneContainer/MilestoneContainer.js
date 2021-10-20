import React from "react";
import { MilestoneCarousel, TitleViewAll } from "..";

const MilestoneContainer = () => {
  return (
    <div className="MilestoneContainer">
      <TitleViewAll />
      <MilestoneCarousel />
      <button>+</button>
    </div>
  );
};

export default MilestoneContainer;
