import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/LoginLogout/LoginLogout";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const Login = (e) => {
    e.preventDefault();
    dispatch(
      login({
        Name: name,
        Password: password,
      })
    );
    navigate("/Welcome");
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center flex-column align-item-center gap-5 text-uppercase w-50  "
        style={{ minHeight: "83dvh" }}
      >
        <p className="text-center display-5 fw-bold">Login Form</p>
        <form className="w-100" onSubmit={(e) => Login(e)}>
          <div className="form-floating mb-3 w-100">
            <input
              type="text"
              className="form-control"
              name="formId1"
              id="formId1"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="formId1">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="formId2"
              id="formId2"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="formId2">Password</label>
          </div>
          <button className="btn btn-info text-uppercase form-control">
            Login
          </button>
        </form>

        <div className="alert alert-primary  text-center" role="alert">
          <Link to="/Welcome" className="alert-link">
            <strong> Forgot Password? </strong>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
