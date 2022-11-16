import React from "react";
import "./LogoSearch.css";
import logo from "../../images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
function LogoSearch() {
  return (
    <div className="logoSearch">
      <div className="search">
        <input type="text" placeholder="search here" />
        <div className="se-icon">
          <BiSearchAlt size={20} />
        </div>
      </div>
    </div>
  );
}

export default LogoSearch;
