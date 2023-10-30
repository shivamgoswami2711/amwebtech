import React from "react";
import "./style/dashboard.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DashboardMenu from "../components/DashboardMenu";
import { useChacklogin } from "../utils/Hook/useChacklogin";

function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function PageLayout() {
   useChacklogin();


  return (
    <div>
      <Header />
      <div className="dashboard">
        <div className="menu_side">
          <DashboardMenu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// this layout use for all auth route

function AuthLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export { MainLayout, PageLayout, AuthLayout };
