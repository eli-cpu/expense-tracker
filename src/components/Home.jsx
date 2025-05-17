import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  // Navigate to login page function
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="app-container">
      {/* Header with logo and navigation */}
      <header className="header">
        <div className="logo-container">
          <h1 className="logo" onClick={() => navigate("/")}>
            ExpenseTracker
          </h1>
        </div>
        <nav className="nav">
          <button className="sign-in-btn" onClick={navigateToLogin}>
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Take Control of Your Finances</h1>
          <p>
            Track expenses, manage budgets, and achieve your financial goals
            with our easy-to-use expense tracker
          </p>
          <button className="cta-button" onClick={navigateToLogin}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="chart-visualization"></div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="features">
        <h2>Track Your Money with Ease</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon expense-icon"></div>
            <h3>Track Expenses</h3>
            <p>Easily log and categorize all your expenses in one place</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon budget-icon"></div>
            <h3>Set Budgets</h3>
            <p>
              Create custom budgets and get alerts when you're close to limits
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon report-icon"></div>
            <h3>Generate Reports</h3>
            <p>
              Get insights with detailed spending reports and visualizations
            </p>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="cta-section">
        <h2>Ready to manage your finances better?</h2>
        <p>
          Join thousands of users who have transformed their financial habits
        </p>
        <button className="cta-button" onClick={navigateToLogin}>
          Start Tracking Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} ExpenseTracker. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
