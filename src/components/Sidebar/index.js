import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdAnalytics, MdDashboard, MdManageAccounts } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { IoPeopleSharp, IoNotificationsSharp, IoSettingsSharp} from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null); 
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle Submenu
  const isOpenSubMenu = (tabIndex) => {
    setActiveTab(activeTab === tabIndex ? null : tabIndex);
  };

  return (
    <div className="sidebar">
      <ul>
        {/* Dashboard */}
        <li>
          <Button
            className={`buttonDash ${location.pathname.includes("/dashboard") ? "active" : ""}`}
            onClick={() => navigate("/dashboard")}
          >
            <span className="icon"><MdDashboard /></span>
            <span>Dashboard</span>
          </Button>
        </li>

        {/* Case Management */}
        <li>
          <Button className={`buttonDash ${activeTab === 1 ? "active" : ""}`} onClick={() => isOpenSubMenu(1)}>
            <span className="icon"><TbListDetails /></span>
            <span>Case Management</span>
            <span className={`arrow ${activeTab === 1 ? "open" : ""}`}><FaAngleRight /></span>
          </Button>
          {activeTab === 1 && (
            <ul className="subMenu">
              <li><Link to="/case-management/requests">Case Requests</Link></li>
              <li><Link to="/case-management/categories">Case Categories</Link></li>
              <li><Link to="/case-management/assignment">Case Assignment</Link></li>
              <li><Link to="/case-management/tracking">Progress Tracking</Link></li>
              <li><Link to="/case-management/escalation">Escalation Panel</Link></li>
            </ul>
          )}
        </li>

        {/* IT Expert Management */}
        <li>
          <Button className={`buttonDash ${activeTab === 2 ? "active" : ""}`} onClick={() => isOpenSubMenu(2)}>
            <span className="icon"><IoPeopleSharp /></span>
            <span>IT Expert Management</span>
            <span className={`arrow ${activeTab === 2 ? "open" : ""}`}><FaAngleRight /></span>
          </Button>
          {activeTab === 2 && (
            <ul className="subMenu">
              <li><Link to="/it-expert/manage">Manage Experts</Link></li>
              <li><Link to="/it-expert/assign">Assign Task</Link></li>
              <li><Link to="/it-expert/performance">Performance Monitoring</Link></li>
            </ul>
          )}
        </li>

        {/* Analytics & Reports */}
        <li>
          <Button className={`buttonDash ${activeTab === 3 ? "active" : ""}`} onClick={() => isOpenSubMenu(3)}>
            <span className="icon"><MdAnalytics /></span>
            <span>Analytics & Reports</span>
            <span className={`arrow ${activeTab === 3 ? "open" : ""}`}><FaAngleRight /></span>
          </Button>
          {activeTab === 3 && (
            <ul className="subMenu">
              <li><Link to="/analytics/trends">Trend Analysis</Link></li>
              <li><Link to="/analytics/reports">Reports</Link></li>
            </ul>
          )}
        </li>

        {/* User Management */}
        <li>
          <Button className={`buttonDash ${activeTab === 9 ? "active" : ""}`} onClick={() => isOpenSubMenu(9)}>
            <span className="icon"><MdManageAccounts /></span>
            <span>User Management</span>
            <span className={`arrow ${activeTab === 9 ? "open" : ""}`}><FaAngleRight /></span>
          </Button>
          {activeTab === 9 && (
            <ul className="subMenu">
              <li><Link to="/user-management/add">Add User</Link></li>
              <li><Link to="/user-management/edit">Edit User</Link></li>
              <li><Link to="/user-management/remove">Remove User</Link></li>
            </ul>
          )}
        </li>

        {/* Notifications */}
        <li>
          <Button className={`buttonDash ${location.pathname === "/notifications" ? "active" : ""}`} onClick={() => navigate("/notifications")}>
            <span className="icon"><IoNotificationsSharp /></span>
            <span>Notifications</span>
          </Button>
        </li>

        {/* Settings */}
        <li>
          <Button className={`buttonDash ${activeTab === 4 ? "active" : ""}`} onClick={() => isOpenSubMenu(4)}>
            <span className="icon"><IoSettingsSharp /></span>
            <span>Settings</span>
            <span className={`arrow ${activeTab === 4 ? "open" : ""}`}><FaAngleRight /></span>
          </Button>
          {activeTab === 4 && (
            <ul className="subMenu">
              <li><Link to="/settings/general">General Settings</Link></li>
              <li><Link to="/settings/privacy">Privacy</Link></li>
              <li><Link to="/logout">Logout Account</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Logout Button */}
      <div className="logoutWrapper">
        <Button variant="contained" onClick={() => navigate("/logout")}>
          <IoMdLogOut /> Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
























// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import { Link, useNavigate } from "react-router-dom";

// import { MdAnalytics, MdDashboard, MdManageAccounts } from "react-icons/md";
// import { FaAngleRight } from "react-icons/fa6";
// import { TbListDetails } from "react-icons/tb";
// import { FaTasks } from "react-icons/fa";
// import { MdContactSupport } from "react-icons/md";
// import { IoNotificationsSharp } from "react-icons/io5";
// import { IoSettingsSharp } from "react-icons/io5";
// import { RiTeamFill } from "react-icons/ri";
// import { IoMdLogOut } from "react-icons/io";
// import { IoPeopleSharp } from "react-icons/io5";

// const Sidebar = () => {
//   const [activeTab, setActiveTab] = useState(null); // State to track active tab

//   // Function to handle the submenu toggle
//   const isOpenSubMenu = (tabIndex) => {
//     setActiveTab(activeTab === tabIndex ? null : tabIndex); // Toggle the active tab
//   };

//   const navigate = useNavigate();

//   const handleDashboard = () => {
//     console.log("Navigating to dashboard"); // Debugging: Check if this gets logged
//     navigate("/dashboard");
//   };
//   return (
//     <>
//       <div className="sidebar">
//         <ul>
//           <li>
//             <Button
//               className={`buttonDash ${activeTab === 5 ? "active" : ""}`}
//               onClick={() => {
//                 isOpenSubMenu(5); // Call the submenu toggle
//                 handleDashboard(); // Navigate to the dashboard
//               }}
//             >
//               <span className="icon">
//                 <MdDashboard />
//               </span>
//               DashBoard
//               <span className={`arrow ${activeTab === 5 ? "open" : ""}`}>
//                 <FaAngleRight />
//               </span>
//             </Button>
//             <div
//               className={`subMenuWrapper ${
//                 activeTab === 5 ? "expanded" : "collapsed"
//               }`}
//             >
//               <ul className="subMenu">
//                 <li>Cases Overview</li>
//                 <li>Recent Activity</li>
//                 <li>Announcements</li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <Button
//               className={`buttonDash ${activeTab === 1 ? "active" : ""}`}
//               onClick={() => isOpenSubMenu(1)}
//             >
//               <span className="icon">
//                 <TbListDetails />
//               </span>
//               Case Management
//               <span className={`arrow ${activeTab === 1 ? "open" : ""}`}>
//                 <FaAngleRight />
//               </span>
//             </Button>
//             <div
//               className={`subMenuWrapper ${
//                 activeTab === 1 ? "expanded" : "collapsed"
//               }`}
//             >
//               <ul className="subMenu">
//                 <li>Case Requests</li>
//                 <li>Case Categories</li>
//                 <li>Case Assignment</li>
//                 <li>Progress Tracking</li>
//                 <li>Escalation Panel</li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <Button
//               className={`buttonDash ${activeTab === 2 ? "active" : ""}`}
//               onClick={() => isOpenSubMenu(2)}
//             >
//               <span className="icon">
//                 <IoPeopleSharp />
//               </span>
//               IT Expert Management
//               <span className={`arrow ${activeTab === 2 ? "open" : ""}`}>
//                 <FaAngleRight />
//               </span>
//             </Button>
//             <div
//               className={`subMenuWrapper ${
//                 activeTab === 2 ? "expanded" : "collapsed"
//               }`}
//             >
//               <ul className="subMenu">
//                 <li>Manage Experts </li>
//                 <li>Assign Task</li>
//                 <li>Performance Monitoring</li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <Button
//               className={`buttonDash ${activeTab === 3 ? "active" : ""}`}
//               onClick={() => isOpenSubMenu(3)}
//             >
//               <span className="icon">
//                 <MdAnalytics />
//               </span>
//               Analytics & Reports
//               <span className={`arrow ${activeTab === 3 ? "open" : ""}`}>
//                 <FaAngleRight />
//               </span>
//             </Button>
//             <div
//               className={`subMenuWrapper ${
//                 activeTab === 3 ? "expanded" : "collapsed"
//               }`}
//             >
//               <ul className="subMenu">
//                 <li>Trend Analysis</li>
//                 <li>Reports</li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <Button
//               className={`buttonDash ${activeTab === 9 ? "active" : ""}`}
//               onClick={() => isOpenSubMenu(9)} // Trigger submenu toggle for this tab
//             >
//               <span className="icon">
//                 <MdManageAccounts />
//               </span>
//               User Management
//               <span className={`arrow ${activeTab === 9 ? "open" : ""}`}>
//                 <FaAngleRight />
//               </span>
//             </Button>
//             <div
//               className={`subMenuWrapper ${
//                 activeTab === 9 ? "expanded" : "collapsed"
//               }`}
//             >
//               <ul className="subMenu">
//                 <li>Add User</li>
//                 <li>Edit User</li>
//                 <li>Remove User</li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <Button className="buttonDash">
//               <span className="icon">
//                 <IoNotificationsSharp />
//               </span>
//               Notifications
//               <span className="arrow">
//                 <FaAngleRight />
//               </span>
//             </Button>
//           </li>
//           <li>
//             <Button
//               className={`buttonDash ${activeTab === 4 ? "active" : ""}`}
//               onClick={() => isOpenSubMenu(4)}
//             >
//               <span className="icon">
//                 <IoSettingsSharp />
//               </span>
//               Setting
//               <span className={`arrow ${activeTab === 4 ? "open" : ""}`}>
//                 <FaAngleRight />
//               </span>
//             </Button>
//             <div
//               className={`subMenuWrapper ${
//                 activeTab === 4 ? "expanded" : "collapsed"
//               }`}
//             >
//               <ul className="subMenu">
//                 <li>General Settings</li>
//                 <li>Privacy</li>
//                 <li>Logout Account</li>
//               </ul>
//             </div>
//           </li>
//         </ul>

//         <br />
//         <div className="logoutWrapper">
//           <div className="logoutBox">
//             <Button variant="contained">
//               <IoMdLogOut />
//               Logout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
