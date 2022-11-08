import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar";
import AddAdmin from "./AddAdmin";
import AddService from "./AddService";

const Dashboard = () => {
  return (
    <DashboardSidebar>
      <Outlet></Outlet>
    </DashboardSidebar>
  );
};

export default Dashboard;
