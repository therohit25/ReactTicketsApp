import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [message, setMessage] = useState("Good Morning");
  const logininfo = useSelector((state) => state.LoginLogoutSlice.value);

  useEffect(() => {
    const hrs = new Date().getHours();
    if (hrs < 12) setMessage("Good Morning!..");
    else if (hrs >= 12 && hrs <= 17) setMessage("Good Afternoon!..");
    else setMessage("Good Night!..");
  }, []);

  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3" style={{ height: "80dvh" }}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{message}</h1>
          <p className="col-md-8 fs-4">
            How are you doing {logininfo && logininfo.Name + ""} Today?
          </p>
          <Link to="/Tickets/TicketForm">
            <button className="btn btn-primary btn-lg" type="button">
              Create New Ticket
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
