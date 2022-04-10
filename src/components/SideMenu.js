import React, { useState } from "react";
import logo from "../img/logo.png";
import "../css/SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {

  const [expand, setExpand] = useState(false)

  return (
    <>
      <div className="side-menu">
        <div className="top-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="title">
            <h2>XIRCLS</h2>
          </div>
        </div>

        <div className="main-menu">
          <ul>
            <li>
              <Link to="/dashboard" className="menu-item">
                <div className="menu-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>
                <span>DashBoard</span>
              </Link>
            </li>
            {/* ====drop=== */}
            <li>
              <Link onClick={() => setExpand(!expand)} to="/content" className="menu-item dropdown"> 
                <div className="menu-icon">
                  <i className="bi bi-newspaper"></i>
                </div>
                <span>Content</span>
              </Link>
              <ul className={`sub-menu ${expand ? "active" : "" }`} >
                <li>
                  <Link to="/content/add">
                  <div className="menu-icon">
                    <i className="bi bi-binoculars"></i>
                  </div>  
                  Add Content</Link>
                </li>
                <li>
                  <Link to="/content/view">
                  <div className="menu-icon">
                  <i className="bi bi-folder-plus"></i>
                  </div>  
                  View Content</Link>
                </li>
              </ul>
            </li>
            {/* ====drop=== */}
            <li>
              <Link to="/design" className="menu-item">
                <div className="menu-icon">
                  <i className="bi bi-pen"></i>
                </div>
                <span>Design</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
