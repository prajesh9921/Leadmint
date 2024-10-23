import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    // Basic email validation
    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email.";
      valid = false;
    }

    // Password validation
    if (password.length === 0) {
      errors.password = "Password cannot be empty.";
      valid = false;
    }

    // Set the error state
    setError(errors);

    if (valid) {
      // Retrieve the user from localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Successful login
        navigate("/home"); // Navigate to home page
      } else {
        // Error if credentials do not match
        alert("Invalid email or password.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Log In</h1>
          <p className="text-sm">Log in to access your account</p>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>
            <input
              placeholder="Type here"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`input max-w-full ${error.email ? "border-red-500" : ""}`}
            />
            {error.email && (
              <label className="form-label text-red-500">
                <span className="form-label-alt">{error.email}</span>
              </label>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`input max-w-full ${error.password ? "border-red-500" : ""}`}
              />
              {error.password && (
                <label className="form-label text-red-500">
                  <span className="form-label-alt">{error.password}</span>
                </label>
              )}
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control justify-center">
              <p onClick={() => navigate("/signup")} className="link link-underline-hover link-primary text-sm">
                Don't have an account yet? Sign up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
