import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "./Nav.css";
function Header() {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.stringify(localStorage.getItem("users"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("users");
    message.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Expense Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex justify-content-between ">
              <li className="nav-links visible">
                {loginUser && loginUser.name}
              </li>
              <button
                className="btn btn-primary"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
