import React, { useState } from "react";
import menuIcon from "../../assets/images/menu_icon.png";
import logo from "../../assets/images/logo_name.png";
import avatar from "../../assets/images/avatar.png";
import '../../assets/styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav">
          <div className="left">
            <img src={menuIcon} alt="Menu Icon" className="dashboard-menu-icon" />
            <img src={logo} alt="Logo" className="db-logo" />
            <div className="seperator"></div>
            <div className="">TM Dashboard</div>
          </div>
          <div className="right">
            <img src={avatar} alt="" />
          </div>
        </div>
      </nav>
      <div className="db-body">

      </div>
    </div>
  );
};

export default Dashboard;
