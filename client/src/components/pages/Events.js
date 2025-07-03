// Events.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.css'; // Add this for extra styles

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📅 Upcoming Events</h2>
      <div className="row">
        {events.map(event => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card event-card h-100">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="text-muted">{new Date(event.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
