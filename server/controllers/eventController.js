const db = require('../config/db');

// Create new event
exports.createEvent = (req, res) => {
  const { title, description, date, created_by } = req.body;
  const sql = 'INSERT INTO events (title, description, date, created_by) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, description, date, created_by], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Event created successfully' });
  });
};

// Get all events
exports.getAllEvents = (req, res) => {
  const sql = 'SELECT * FROM events';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};

// Update event
exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  const sql = 'UPDATE events SET title = ?, description = ?, date = ? WHERE id = ?';
  db.query(sql, [title, description, date, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Event updated successfully' });
  });
};

// Delete event
exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM events WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Event deleted successfully' });
  });
};
