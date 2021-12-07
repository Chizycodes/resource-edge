import React from "react";
import "../assets/styles/AdminLogistics.css";
import Card from "./Card";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";

const AdminLogistics = () => {
  return (
    <div className="admin-section">
      <div>
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
      </div>
    </div>
  );
};

export default AdminLogistics;
