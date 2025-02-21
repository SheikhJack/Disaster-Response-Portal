import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Dashboardbox = (props) => {
  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
      }}
    >
      <div className="pl2">
      <div className="col1">
          <h4 className="textwhite">{props.title ? props.title : "Total Users"}</h4>
          <span className="textblack">{props.number ? props.number : "277"}</span>
        </div>
        <div className="mlauto">
          {
            props.icon ?
            <span span className="icondash">
            {props.icon? props.icon : ''}
            </span>
            :
            ''
          }
        </div>
      </div>
      <div className="pl3">
        <h5 className="textwhitemd">LAST MONTH</h5>

      </div>
    </div>
  );
};

export default Dashboardbox;
