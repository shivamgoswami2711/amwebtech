import React from "react";
import "./style/dashboardMenu.css";
import { NavLink } from "react-router-dom";

function DashboardMenu() {
  return (
    <div className="dashboard__Menu">
      <ul>
        <NavLink to={"/"}>
          <li>dashboard</li>
        </NavLink>
        <NavLink to={"/material"}>
          <li>material</li>
        </NavLink>
        <NavLink to={"/product"}>
          <li>product</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default DashboardMenu;
