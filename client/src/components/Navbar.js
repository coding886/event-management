import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Navbar.css';  // Adjust path if needed
import { getCurrentUser, isAdmin } from '../utils/auth';

const user = getCurrentUser();


function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-info custom-navbar px-4">


      <Link className="navbar-brand fw-bold" to="/">CollegeEvents</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {isAdmin() && (
  <>
    <li className="nav-item">
      <Link className="nav-link" to="/add-event">Add Event</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/admin">Admin</Link>
    </li>
  </>
)}

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-event">Add Event</Link> {/* ✅ Newly added */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
