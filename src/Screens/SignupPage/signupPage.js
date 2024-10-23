import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirmPassword state
  const [error, setError] = useState({ email: "", password: "", confirmPassword: "" }); // Added confirmPassword error

  const navigate = useNavigate();

  // Email validation regex pattern
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = () => {
    let valid = true;
    let errors = { email: "", password: "", confirmPassword: "" }; // Include confirmPassword in errors

    // Email validation
    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email.";
      valid = false;
    }

    // Password validation
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setError(errors);

    if (valid) {
      // Store email and password in localStorage
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full mx-auto flex max-w-sm flex-col gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Sign Up</h1>
          <p className="text-sm">Sign up to create your account</p>
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
          <div className="form-field">
            <label className="form-label">Confirm Password</label>
            <div className="form-control">
              <input
                placeholder="Re-type password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`input max-w-full ${error.confirmPassword ? "border-red-500" : ""}`}
              />
              {error.confirmPassword && (
                <label className="form-label text-red-500">
                  <span className="form-label-alt">{error.confirmPassword}</span>
                </label>
              )}
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button onClick={handleSignUp} className="btn btn-primary w-full">
                Sign up
              </button>
            </div>
          </div>

          <div className="form-field">
            <div className="form-control justify-center">
              <p onClick={() => navigate("/")} className="link link-underline-hover link-primary text-sm">
                Already have an account? Sign in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
