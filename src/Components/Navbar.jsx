import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const pathname = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          A2Z_ASSISTS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link   ${
                  pathname.pathname === "/" ? "text-dark" : "text-white"
                }`}
                to="/"
                aria-current="page"
              >
                LoginForm
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link   ${
                  pathname.pathname === "/Tickets/Ticket" ||
                  pathname.pathname === "/Tickets/TicketForm"
                    ? "text-dark"
                    : "text-white"
                }`}
                to="/Tickets/Ticket"
                aria-current="page"
              >
                Tickets
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
