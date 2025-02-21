import React from "react";
import Dashboardbox from "./components/Dashboardbox";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdAssignment, MdOutlinePendingActions } from "react-icons/md";
import { MdAssignmentLate } from "react-icons/md";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <div className="right-content">
        <div className="rowDash">
          <div className="columnFirst">
            <Dashboardbox
              title="Total Cases"
              number={1368}
              color={["#1da256", "#48d483"]}
              icon={<MdAssignment />}
            />
            <Dashboardbox
              title="Total Users"
              number={2604}
              color={["#c012e2", "#eb64fe"]}
              icon={<FaUserAlt />}
            />
            <Dashboardbox
              title="Completed Cases"
              number={1200}
              color={["#2c78e5", "#60aff5"]}
              icon={<MdAssignmentTurnedIn />}
            />
            <Dashboardbox
              title="Pending Cases"
              number={235}
              color={["#e1950e", "#f3cd29"]}
              icon={<MdOutlinePendingActions />}
            />
          </div>
          <div className="columnSecond">
            {/* <div className="box"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
