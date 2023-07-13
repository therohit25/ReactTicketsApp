import React from "react";
import Ticket from "./Ticket";
import { Link, useLocation } from "react-router-dom";
import TicketForm from "./TicketForm";

const Tickets = () => {
  const pathname = useLocation();
  return (
    <>
      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <Link
                class={`nav-link  ${
                  pathname.pathname === "/Tickets/Ticket" ? "active" : ""
                }`}
                aria-current="true"
                to="/Tickets/Ticket"
              >
                Ticket
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class={`nav-link  ${
                  pathname.pathname === "/Tickets/Ticket" ? "" : "active"
                }`}
                to="/Tickets/TicketForm"
              >
                TicketForm
              </Link>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            {pathname.pathname === "/Tickets/Ticket" ? (
              <Ticket />
            ) : (
              <TicketForm />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Tickets;
