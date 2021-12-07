import React from "react";
import Card from "./Card";
import icon1 from "../assets/images/icon1.png";
import "../assets/styles/HR.css";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import employeeDirectory from "../assets/images/employee_directory.png";

const HR = () => {
  return (
    <div className="hr-section">
      <div>
        <div className="intro-texts">
          <h2>Human Resources</h2>
          <p>
            Onboard new employees, manage the employee lifecycle and measure
            employee performance.
          </p>
        </div>

        <div className="hr-cards">
          <Card
            className="card"
            image={icon1}
            color="#5243aa"
            title="Employee Management"
            text="From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."
          />
          <Card
            className="card"
            image={icon2}
            color="#008DA6"
            title="Performance Management"
            text="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. "
          />
          <Card
            className="card"
            image={icon3}
            color="#42526E"
            title="Paid time off"
            text="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."
          />
        </div>

        <div className="employee-img">
          <img src={employeeDirectory} alt="Employee Directory" />
        </div>
      </div>
    </div>
  );
};

export default HR;
