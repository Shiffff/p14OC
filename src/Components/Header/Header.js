import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuPage, setMenuPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setMenuPage(true);
    } else {
      setMenuPage(false);
    }
  }, [location]);

  return (
    <header>
      <h1>HRNET</h1>
      <div className="btnHeaderRight">
        {menuPage ? (
          <Link to="/employee-list">
            <button>View Current Employees</button>
          </Link>
        ) : (
          <Link to="/">
            <button>Create Employee</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
