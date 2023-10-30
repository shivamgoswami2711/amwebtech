import React from "react";
import "./style/header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login", { replace: true });
  };
  return (
    <header>
      <div></div>
      <div>
        <div onClick={logOut} className="Logout__button">
          <span>Logout</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
