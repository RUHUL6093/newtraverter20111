import React from "react";
import logo from "../../images/logo.png";
import Button from "@material-ui/core/Button";
import "./Header.css";

const Header = () => {
  return (
    <div class="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/Home">Home </a>

        <a href="/Destination">Destination </a>

        <a href="/Blog"> Blog </a>
        <a href="/Contact"> Contact </a>
        <a href="/Login"> Login </a>
      </nav>
    </div>
  );
};
export default Header;
