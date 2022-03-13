import React, { FC } from "react";
import { Link } from "react-router-dom";
const Navbar: FC = (): JSX.Element => {
  return (
    <>
      <nav>
        <div className="nav-wrapper indigo darken-1">
          <Link to="/" className="brand-logo">
            React + TS
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/todos">Todo list</Link>
            </li>
            <li>
              <Link to="/about">Information</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
