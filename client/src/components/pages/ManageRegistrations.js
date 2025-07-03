import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageRegistrations() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/registrations')
      .then(res => {
        console.log("Fetched Registrations: ", res.data); // 🔍 Debugging log
        setRegistrations(res.data);
      })
      .catch(err => {
        console.error('Error fetching registrations:', err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Event Registrations</h2>
      {registrations.length === 0 ? (
        <p className="text-center">No registrations found.</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Registration ID</th>
              <th>User</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(reg => (
              <tr key={reg.id}>
                <td>{reg.id}</td>
                <td>{reg.user}</td>
                <td>{reg.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ManageRegistrations;
