import React, { useEffect } from "react";
import { MilestoneCarousel, TitleViewAll } from "..";
import { connect } from "react-redux";
import { receiveMilestones } from "../../store/milestones";

const MilestoneContainer = (props) => {
  useEffect(() => {
    if (props.receiveMilestones) {
      props.receiveMilestones();
    }
  }, []);

  console.log(props);

  return (
    <div className="MilestoneContainer">
      <TitleViewAll />
      <MilestoneCarousel />
      <button>+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    milestones: state.milestones.allMilestones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMilestones: () => dispatch(receiveMilestones()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MilestoneContainer);
