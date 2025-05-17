import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would handle authentication in a real application
    console.log("Login attempt with:", { email, password });
    alert("Authentication functionality will be implemented in the future!");
  };

  return (
    <div className="login-container">
      <header className="header">
        <div className="logo-container">
          <h1 className="logo" onClick={() => navigate("/")}>
            ExpenseTracker
          </h1>
        </div>
      </header>

      <div className="login-card">
        <h1 className="login-title">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="login-subtitle">
          {isSignUp
            ? "Sign up to start tracking your expenses"
            : "Sign in to access your expense tracker"}
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                required
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button type="submit" className="login-button">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="toggle-form-btn"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
          <button className="back-to-home" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
