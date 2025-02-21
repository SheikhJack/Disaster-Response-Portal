import React, { useState } from "react";
import logo from "../../assets/Logo.png";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdOutlineMenu } from "react-icons/md"; // for drawer toogle
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { profile } from "../../assets/Profile.png";

import SearchBox from "../Searchbar";

const Header = () => {

  const [isOpennotificationDrop, setisOpennotificationDrop] =useState(false);
  const openNotifications=Boolean(isOpennotificationDrop);


  const handleOpennotificationDrop=()=>
  {
    setisOpennotificationDrop(true)
  }
  const handleClosenotificationDrop=()=>
  {
    setisOpennotificationDrop(false)
  }




  return (
    <>
      <header>
        <div className="container-fluid w-100">
          <div className="row w-100">
            {/* Logo Wrapper */}
            <div className="col-xs-4 d-flex align-items-center part1">
              <Link to={"/"} className="logo">
                {/* <img src={logo} /> */}
                {/* <span className='ml-2'>CyberResponse</span> */}
              </Link>
            </div>
            <span className="titleCR m-5">Disaster Assist Portal</span>
            <div className="col-xs-3 d-flex align-items-center part2">
              <Button className="roundedcircle">
                <MdOutlineMenuOpen />
              </Button>
            </div>
            <div className="col-xs-3 d-flex align-items-center part3">
              <SearchBox />
            </div>
            <div className="columnFour">
              <Button className="roundedcircle">
                <IoMail />
              </Button>
              <Button className="roundedcircle" id="bell" onClick={handleOpennotificationDrop}>
                <FaRegBell />
              </Button>
            
            </div>
            <div className="myAcc">
              <div className="userImg">
                <span className="roundedcircle">
                  {/* <img src={profile} /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
