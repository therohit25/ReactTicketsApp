import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const TicketForm = () => {
  const [ticketdata, setTicketdata] = useState({
    LeadSource: "",
    Name: "",
    ContactNo: "",
    Email: "",
    VehicalRegNo: "",
    Breakdown: "",
    Location: "",
    ServiceFee: "",
    AssistanceTime: "",
  });

  const [error, setError] = useState({
    leadsourcehelp: "",
    namehelp: "",
    contactnohelp: "",
    emailhelp: "",
    vehicalregnohelp: "",
    breakdownhelp: "",
    locationhelp: "",
    assistancetimehelp: "",
  });
  const handleChange = (e) => {
    setTicketdata({
      ...ticketdata,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "Email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
        setError({ emailhelp: true });
      } else {
        setError({ emailhelp: false });
      }
    } else if (e.target.name === "VehicalRegNo") {
      if (!/^[A-Z0-9]+$/.test(e.target.value)) {
        setError({ vehicalregnohelp: true });
      } else {
        setError({ vehicalregnohelp: false });
      }
    } else {
      setError({ ...error, [e.target.name]: false });
    }
  };

  const Validate = () => {
    for (const key in error) {
      if (error[key] === true) {
        return false;
      }
    }
    return true;
  };

  const ValidateForm = (e) => {
    e.preventDefault();
    const validationerror = Validate();
    if (validationerror) {
      toast.success("New Task Added!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      const existingdata = localStorage.getItem("Tickets");
      const parseddata = existingdata ? JSON.parse(existingdata) : [];
      parseddata.push(ticketdata);
      localStorage.setItem("Tickets", JSON.stringify(parseddata));
    }

    setTicketdata({
      LeadSource: "",
      Name: "",
      ContactNo: "",
      Email: "",
      VehicalRegNo: "",
      Breakdown: "",
      Location: "",
      ServiceFee: "",
      AssistanceTime: "",
    });
  };
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <form
          onSubmit={(e) => ValidateForm(e)}
          className="form-control  px-5 "
          style={{
            background:
              "linear-gradient( 45deg, hsl(229, 86%, 80%) 51%, hsl(229, 90%, 77%) 51%, hwb(229 56% 2%) 51% )",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            textAlign: "left",
            minWidth: "60vw",
            width: "auto",
          }}
        >
          <p className="text-center display-5 fw-bold my-5 text-uppercase">
            Ticket Form
          </p>
          <div class="mb-3 ">
            <label for="LeadSource" class="form-label">
              Lead Source:
            </label>
            <select
              class="form-select form-select-lg"
              name="LeadSource"
              id="LeadSource"
              onChange={(e) => handleChange(e)}
              required
            >
              <option selected disabled>
                Select one
              </option>
              <option value="Web">Web</option>
              <option value="Chat">Chat</option>
              <option value="Call">Call</option>
            </select>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="text"
              name="Name"
              id="Name"
              className="form-control"
              placeholder="Name"
              aria-describedby="namehelp"
              onChange={(e) => handleChange(e)}
              required
            />

            {error.namehelp === true && (
              <small id="namehelp" className="text-muted">
                Valid Name
              </small>
            )}
            <label htmlFor="Name" className="form-label">
              Name
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="number"
              name="ContactNo"
              id="ContactNo"
              className="form-control"
              placeholder="Name"
              aria-describedby="contacthelp"
              onChange={(e) => handleChange(e)}
              required
            />

            {error.contactnohelp === true && (
              <small id="contactnohelp" className="text-muted">
                Valid Contact
              </small>
            )}
            <label htmlFor="ContactNo" className="form-label">
              Contact No
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="email"
              name="Email"
              id="Email"
              className="form-control"
              placeholder="Email"
              aria-describedby="email"
              onChange={(e) => handleChange(e)}
              required
            />
            {error.emailhelp === true && (
              <small id="emailhelp" className="text-muted text-danger">
                Enter a Valid Email Address
              </small>
            )}

            <label htmlFor="Email" className="form-label">
              Email
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="text"
              id="VehicalRegNo"
              name="VehicalRegNo"
              className="form-control"
              placeholder="VehicalRegNo"
              aria-describedby="VehicalRegNolhelp"
              onChange={(e) => handleChange(e)}
              required
            />
            {error.vehicalregnohelp === true && (
              <small id="vehicalregnohelp" className="text-muted">
                Enter a Valid Vehical Registratin No
              </small>
            )}

            <label htmlFor="VehicalRegNo" className="form-label">
              Vehical Registration Number
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="text"
              name="Breakdown"
              id="Breakdown"
              className="form-control"
              placeholder="email"
              aria-describedby="Breakdown"
              onChange={(e) => handleChange(e)}
              required
            />
            {error.breakdownhelp === true && (
              <small id="breakdownhelp" className="text-muted">
                Vehical Breakdown
              </small>
            )}

            <label htmlFor="Breakdown" className="form-label">
              Breakdown
            </label>
          </div>
          <div className="mb-3 form-floating">
            <input
              type="text"
              name="Location"
              id="Location"
              className="form-control"
              placeholder="Location"
              aria-describedby="Locationhelp"
              onChange={(e) => handleChange(e)}
              required
            />
            {error.locationhelp === true && (
              <small id="locationhelp" className="text-muted">
                Valid Vehical Location
              </small>
            )}

            <label htmlFor="Location" className="form-label">
              Location
            </label>
          </div>

          <div className="mb-3 form-floating">
            <input
              type="number"
              name="ServiceFee"
              id="ServiceFee"
              className="form-control"
              placeholder="Service Fee"
              aria-describedby="servicefeehelp"
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="ServiceFee" className="form-label">
              Service Fee
            </label>
          </div>

          <div className="mb-3 form-floating form-floating">
            <input
              type="datetime-local"
              name="AssistanceTime"
              id="AssistanceTime"
              className="form-control"
              placeholder="Location"
              aria-describedby="AssistanceTimehelp"
              onChange={(e) => handleChange(e)}
              required
            />
            {error.assistancetimehelp === true && (
              <small id="assistancetimehelp" className="text-muted">
                Valid AssistanceTime
              </small>
            )}

            <label htmlFor="AssistanceTime" className="form-label">
              Valid Assistance Time
            </label>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary form-control">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default TicketForm;
