import React from 'react';

function Register() {
  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required />
        </div>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
