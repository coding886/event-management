import React, { useState } from 'react';
import axios from 'axios';
import './AddEvent.css';

export default function AddEvent() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    image: '',
    created_by: 1  // Admin ID (hardcoded for now)
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/events', form);
      alert('✅ Event added successfully!');
      setForm({ title: '', description: '', date: '', image: '', created_by: 1 });
    } catch (err) {
      alert('❌ Error adding event.');
      console.error(err);
    }
  };

  return (
    <div className="add-event container py-5">
      <h2 className="text-center mb-4">➕ Add New Event</h2>
      <form onSubmit={handleSubmit} className="form-card p-4 shadow rounded">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" required value={form.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" rows="3" required value={form.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" name="date" className="form-control" required value={form.date} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="url" name="image" className="form-control" value={form.image} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Event</button>
      </form>
    </div>
  );
}
