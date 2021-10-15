import React from "react";
import logo from "../logo.svg";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <img src={logo} alt="logo" />
      <div className="navClick navClickHighlight">
        <h3>Dashboard</h3>
      </div>
      <div className="navClick">
        <h3>Milestone</h3>
      </div>
    </div>
  );
};

export default Sidebar;
