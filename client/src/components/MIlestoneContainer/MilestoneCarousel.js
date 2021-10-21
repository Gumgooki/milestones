import { SingleMilestoneContainer } from "..";
import React, { Component } from "react";
import Carousel from "react-simply-carousel";

const styles = { width: 300, height: 100, display: "flex" };

class MilestoneCarousel extends Component {
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <Carousel
        activeSlideIndex={this.state.activeSlideIndex}
        onRequestChange={this.setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={1}
        infinite={false}
        containerProps={{
          width: "1500px",
          display: "flex",
          justifycontent: "center",
          fontSize: "1rem",
          overflow: "hidden",
        }}
      >
        <div style={styles}>
          <SingleMilestoneContainer description="Believing Is The Absence Of Doubt" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="When The Morning Dawns" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="Control Your Own Level Of Motivation" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="Trust In Yourself" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="Progress Is Manifestation Of Self" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="Don't Let Them Get You Down" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="Test Yourself Often" />
        </div>
        <div style={styles}>
          <SingleMilestoneContainer description="Better Yourself Through Action" />
        </div>
      </Carousel>
    );
  }
}

export default MilestoneCarousel;
