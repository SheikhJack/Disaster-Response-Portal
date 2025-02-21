import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import { MdAnalytics, MdDashboard, MdManageAccounts } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null); // State to track active tab

  // Function to handle the submenu toggle
  const isOpenSubMenu = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex); // Toggle the active tab
  };

  const navigate = useNavigate();

  const handleDashboard = () => {
    console.log("Navigating to dashboard"); // Debugging: Check if this gets logged
    navigate("/dashboard");
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Button
              className={`buttonDash ${activeTab === 5 ? "active" : ""}`}
              onClick={() => {
                isOpenSubMenu(5); // Call the submenu toggle
                handleDashboard(); // Navigate to the dashboard
              }}
            >
              <span className="icon">
                <MdDashboard />
              </span>
              DashBoard
              <span className={`arrow ${activeTab === 5 ? "open" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`subMenuWrapper ${
                activeTab === 5 ? "expanded" : "collapsed"
              }`}
            >
              <ul className="subMenu">
                <li>Cases Overview</li>
                <li>Recent Activity</li>
                <li>Announcements</li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`buttonDash ${activeTab === 1 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(1)}
            >
              <span className="icon">
                <TbListDetails />
              </span>
              Case Management
              <span className={`arrow ${activeTab === 1 ? "open" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`subMenuWrapper ${
                activeTab === 1 ? "expanded" : "collapsed"
              }`}
            >
              <ul className="subMenu">
                <li>Case Requests</li>
                <li>Case Categories</li>
                <li>Case Assignment</li>
                <li>Progress Tracking</li>
                <li>Escalation Panel</li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`buttonDash ${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(2)}
            >
              <span className="icon">
                <IoPeopleSharp />
              </span>
              IT Expert Management
              <span className={`arrow ${activeTab === 2 ? "open" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`subMenuWrapper ${
                activeTab === 2 ? "expanded" : "collapsed"
              }`}
            >
              <ul className="subMenu">
                <li>Manage Experts </li>
                <li>Assign Task</li>
                <li>Performance Monitoring</li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`buttonDash ${activeTab === 3 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(3)}
            >
              <span className="icon">
                <MdAnalytics />
              </span>
              Analytics & Reports
              <span className={`arrow ${activeTab === 3 ? "open" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`subMenuWrapper ${
                activeTab === 3 ? "expanded" : "collapsed"
              }`}
            >
              <ul className="subMenu">
                <li>Trend Analysis</li>
                <li>Reports</li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`buttonDash ${activeTab === 9 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(9)} // Trigger submenu toggle for this tab
            >
              <span className="icon">
                <MdManageAccounts />
              </span>
              User Management
              <span className={`arrow ${activeTab === 9 ? "open" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`subMenuWrapper ${
                activeTab === 9 ? "expanded" : "collapsed"
              }`}
            >
              <ul className="subMenu">
                <li>Add User</li>
                <li>Edit User</li>
                <li>Remove User</li>
              </ul>
            </div>
          </li>
          <li>
            <Button className="buttonDash">
              <span className="icon">
                <IoNotificationsSharp />
              </span>
              Notifications
              <span className="arrow">
                <FaAngleRight />
              </span>
            </Button>
          </li>
          <li>
            <Button
              className={`buttonDash ${activeTab === 4 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(4)}
            >
              <span className="icon">
                <IoSettingsSharp />
              </span>
              Setting
              <span className={`arrow ${activeTab === 4 ? "open" : ""}`}>
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`subMenuWrapper ${
                activeTab === 4 ? "expanded" : "collapsed"
              }`}
            >
              <ul className="subMenu">
                <li>General Settings</li>
                <li>Privacy</li>
                <li>Logout Account</li>
              </ul>
            </div>
          </li>
        </ul>

        <br />
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <IoMdLogOut />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
