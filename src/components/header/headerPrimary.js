import React from "react";
import "../../components/header/headerPrimary.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function HeaderPrimary() {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src="..//logo.png" className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        <div className="login button">Log In</div>
        <div className="signup button">Sign up</div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
