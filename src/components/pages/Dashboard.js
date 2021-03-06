import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/images/menu_icon.png";
import logo from "../../assets/images/logo_name.png";
import avatar from "../../assets/images/avatar.png";
import "../../assets/styles/Dashboard.css";
import Button from "../Button";
import talentMIcon from "../../assets/images/task_manager_icon.png";
import employeeIcon from "../../assets/images/employee_icon.png";
import blueCheck from "../../assets/images/blue_check.png";

const Dashboard = ({ setUser }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const getUser = localStorage.getItem("re-user");
    if (!getUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem("re-user");
    setUser({
      email: "",
      password: "",
      isLogged: false,
    });
    navigate("/");
      
    }, 2000);
    
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav">
          <div className="left">
            <img
              src={menuIcon}
              alt="Menu Icon"
              className="dashboard-menu-icon"
            />
            <Link to="/">
              <img src={logo} alt="Logo" className="db-logo" />
            </Link>

            <div className="seperator"></div>
            <div className="type">TM Dashboard</div>
          </div>
          <div className="right" onClick={toggleDropdown}>
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
      </nav>
      {/* DROPDOWN MENU*/}
      <div
        className={toggle ? "db-dropdown db-dropdown-active" : "db-dropdown"}
      >
        <div className="dd-div">
          <h2>OSITADINMA NWANGWU</h2>
          <h3 className="dd">Profile</h3>

          <p>Use Resource Edge as</p>
          <div className="profiles">
            <div className="talent-manager dd">
              <div>
                <div className="t-icon">
                  <img src={talentMIcon} alt="Icon" />
                </div>
                <div className="profile-text">Talent Manager</div>
              </div>

              <img src={blueCheck} alt="Icon" className="blue-check" />
            </div>

            <div className="employee dd">
              <div>
                <div className="e-icon">
                  <img src={employeeIcon} alt="Icon" />
                </div>
                <div className="profile-text">Employee</div>
              </div>

              <img src={blueCheck} alt="Icon" className="blue-check" />
            </div>
          </div>
        </div>
        <div className="dd-seperator"></div>
        <div className="logout dd" onClick={handleLogout}>
          Logout
        </div>
      </div>
      {/* DROPDOWN MENU*/}

      <div className="db-body">
        <div className="greeting">
          <h1>Hello, Ositadinma Nwangwu</h1>
          <p>Welcome and good to have you back.</p>
        </div>
        <div className="tasks-div">
          <h2>Things to do</h2>
          <div className="task">
            <div className="task-left">
              <div className="circle"></div>
              <p>Upload your employee performance agreement</p>
            </div>
            <Button className="begin-btn" text="Begin" />
          </div>
          <div className="task">
            <div className="task-left">
              <div className="circle"></div>
              <p>Start quarterly self review</p>
            </div>
            <Button className="resume-btn" text="Resume" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
