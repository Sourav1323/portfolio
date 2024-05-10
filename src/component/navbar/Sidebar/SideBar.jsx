import React from "react";
import "./SideBar.scss";
import Links from "./Link";
import Toggle from "./toggle/Toggle";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="link">
       
        <Links />
      </div>
      <Toggle />
    </div>
  );
};

export default SideBar;
