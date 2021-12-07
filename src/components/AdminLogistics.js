import React from "react";
import "../assets/styles/AdminLogistics.css";
import Card from "./Card";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";
import travel from "../assets/images/travel.png";
import payroll from "../assets/images/payroll.png";
import unnLogo from "../assets/images/unnlogo.png";
import tenece from "../assets/images/tenecelogo.png";
import privateEstates from "../assets/images/privateestates.png";
import genesysLogo from "../assets/images/genesyslogo.png";

const AdminLogistics = () => {
  return (
    <div className="admin-finance">
      <div className="admin-section">
        <div className="admin-first">
          <div className="intro-texts">
            <h2>Admin & Logistics</h2>
            <p>
              Manage and track company assets as well as logistics for
              travelling employees
            </p>
          </div>
          <div className="admin-cards">
            <Card
              className="card"
              image={icon4}
              color="#FF8B00"
              title="Travel & Logistics"
              text="Make travel requests, get approvals, and have access to travel information."
            />
            <Card
              className="card"
              image={icon5}
              color="#008DA6"
              title="Asset Management"
              text="Manage the acquisition, assignment, and disposition of assets seamlessly."
            />
          </div>
        </div>
        <div className="employee-img">
          <img src={travel} alt="travel and logistics" />
        </div>
      </div>

      <div className="finance-section">
        <div className="admin-first">
          <div className="intro-texts">
            <h2>Finance</h2>
            <p>
              Manage and track company assets as well as logistics for
              travelling employees
            </p>
          </div>
          <div className="admin-cards">
            <Card
              className="card"
              image={icon4}
              color="#0052CC"
              title="Re Vouchers"
              text="Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers"
            />
            <Card
              className="card"
              image={icon5}
              color="#008DA6"
              title="Payroll"
              text="Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."
            />
          </div>
        </div>
        <div className="employee-img">
          <img src={payroll} alt="Payroll" />
        </div>
      </div>

      <div className="sponsors">
        <img src={unnLogo} alt="University of Nigeria, Nsukka Logo" />
        <img src={tenece} alt="Tenece Logo" />
        <img src={privateEstates} alt="Private Estates Logo" />
        <img src={genesysLogo} alt="Genesys Logo" />
      </div>
    </div>
  );
};

export default AdminLogistics;
