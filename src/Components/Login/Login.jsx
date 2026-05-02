import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="container">
      <div className="login-grid">

        {/* Title */}
        <div className="login-text">
          <h2>Login</h2>
        </div>

        {/* Sign up link */}
        <div className="login-text">
          Are you a new member?{" "}
          <span>
            <a href="/Sign_Up/Sign_Up.html" style={{ color: "#2190FF" }}>
              Sign Up Here
            </a>
          </span>
        </div>

        <br />

        {/* Login form */}
        <div className="login-form">
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            {/* Buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>

              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>

            <br />

            {/* Forgot password */}
            <div className="login-text">
              Forgot Password?
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;