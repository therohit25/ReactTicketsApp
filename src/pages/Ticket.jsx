import React, { useEffect, useState } from "react";
import ticket from "../assets/images/ticket.jpg";
import { Link } from "react-router-dom";
const Ticket = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(JSON.parse(localStorage.getItem("Tickets")));
  }, []);

  return (
    <>
      <div className="container " style={{ minHeight: "75dvh" }}>
        <div className="row justify-content-center">
          {tickets !== null ? (
            tickets.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <div class="card text-center my-5 " key={index}>
                    <img class="card-img-top" src={ticket} alt="Ticket" />
                    <div class="card-body">
                      <h4 class="card-title">LeadSource :{item.LeadSource} </h4>
                      <p class="card-text">Name: {item.Name}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Email: {item.Email}</li>
                      <li class="list-group-item">
                        VehicalRegNo: {item.VehicalRegNo}
                      </li>
                      <li class="list-group-item">
                        ContactNo: {item.ContactNo}
                      </li>
                      <li class="list-group-item">Location: {item.Location}</li>
                      <li class="list-group-item">
                        AssistanceTime: {item.AssistanceTime}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="my-5">
              <h1>No Tickets Yet!..</h1>
              <br />
              <Link to="/Tickets/TicketForm">Add Tickets</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Ticket;
