import React, { useState } from "react";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import bg from "./../../images/bg.png";
import { ToastContainer, toast } from "react-toastify";
import "./Auth.css";
function Auth() {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // const dispatch = useDispatch()

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(logIn(data, navigate));
  };
  const handleRegister = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    data.password === data.confirmPassword
      ? dispatch(signUp(data, navigate))
      : setConfirmPass(false);
  };

  return (
    <div className="test">
      <div className="picture">
        <img src={bg} />
      </div>
      <div
        class="row full-height justify-content-center"
        style={{ width: "70%" }}
      >
        <div
          class="col-12 text-center align-self-center py-5"
          style={{ paddingTop: "0" }}
        >
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 class="mb-0 pb-3" style={{ color: "white" }}>
              <span>Log In</span>
              <span>Sign Up</span>
            </h6>
            <input
              class="checkbox"
              type="checkbox"
              id="reg-log"
              name="reg-log"
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
                console.log(setIsSignUp);
              }}
            />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto" style={{ marginTop: 20 }}>
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3" style={{ color: "white" }}>
                        Log In
                      </h4>
                      <div class="form-group mt-2">
                        <input
                          label="username"
                          type="email"
                          value={data.username}
                          name="username"
                          onChange={handleChange}
                          required
                          invalid="true"
                          validation="Please provide your email"
                          autoComplete="none"
                          id="logemail"
                          class="form-style"
                          placeholder="email"
                        />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        {" "}
                        <input
                          label="Password"
                          type="password"
                          value={data.password}
                          name="password"
                          onChange={handleChange}
                          required
                          invalid="true"
                          validation="Please provide your password"
                          id="logpass"
                          class="form-style"
                          palceholder="password here"
                        />
                      </div>
                      <div class="form-group">
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="btn-32"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-back" style={{ padding: "100px" }}>
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3" style={{ color: "white" }}>
                        Sign Up
                      </h4>
                      <div class="form-group">
                        <input
                          type="text"
                          name="firstname"
                          class="form-style"
                          placeholder="Please provide your first name"
                          id="logname"
                          autocomplete="off"
                          label="firstname"
                          value={data.firstname}
                          onChange={handleChange}
                          required
                          invalid="true"
                        />
                      </div>
                      <div class="form-group" style={{ paddingTop: 10 }}>
                        <input
                          type="text"
                          name="lastname"
                          class="form-style"
                          placeholder="Please provide your last name"
                          id="logname"
                          autocomplete="off"
                          label="lastname"
                          value={data.lastname}
                          onChange={handleChange}
                          required
                          invalid="true"
                        />
                      </div>

                      <div class="form-group mt-2">
                        <input
                          label="username"
                          type="email"
                          value={data.username}
                          name="username"
                          onChange={handleChange}
                          required
                          invalid="true"
                          validation="Please provide your email"
                          autoComplete="off"
                          id="logemail"
                          class="form-style"
                          placeholder="email"
                        />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          label="Password"
                          type="password"
                          value={data.password}
                          name="password"
                          onChange={handleChange}
                          required
                          invalid="true"
                          validation="Please provide your password"
                          id="logpass"
                          class="form-style"
                          placeholder="password"
                        />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input
                          invalid="true"
                          id="logpass"
                          class="form-style"
                          label="Password confirm"
                          type="password"
                          name="confirmPassword"
                          value={data.confirmPassword}
                          onChange={handleChange}
                          required
                          placeholder="please confirm your password"
                        />
                      </div>
                      <button className="btn-32" onClick={handleRegister}>
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
