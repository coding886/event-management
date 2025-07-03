import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';    // ← add this

function Admin() {
  return (
    <div className="container mt-5 admin-page">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View and manage registered users.</p>
              <Link to="/admin/users" className="btn btn-outline-primary">Go</Link>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Event Registrations</h5>
              <p className="card-text">See who registered for events.</p>
              <Link to="/admin/registrations" className="btn btn-outline-success">Go</Link>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <h5 className="card-title">Manage Events</h5>
              <p className="card-text">Add, edit, or delete events.</p>
             <Link to="/add-event" className="btn btn-outline-danger">Go</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
