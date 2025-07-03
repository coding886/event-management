import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <div className="overlay">
        <div className="text-box container text-center text-white">
          <h1 className="display-3 fw-bold">🎓 Welcome to College Event Portal</h1>
          <p className="lead mt-3">
            Discover events, join campus activities, and celebrate student life — all in one place.
          </p>
          <a href="/events" className="btn btn-outline-light btn-lg mt-4 shadow">View Events</a>
        </div>
      </div>
    </div>
  );
}
