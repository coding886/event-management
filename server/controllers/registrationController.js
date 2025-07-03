const db = require('../config/db');

// Register a user for an event
exports.registerUserToEvent = (req, res) => {
  const { user_id, event_id } = req.body;

  const sql = 'INSERT INTO registrations (user_id, event_id) VALUES (?, ?)';
  db.query(sql, [user_id, event_id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User registered for event successfully' });
  });
};

// Get all registrations
exports.getAllRegistrations = (req, res) => {
  const sql = `
    SELECT r.id, u.name AS user, e.title AS event
    FROM registrations r
    JOIN users u ON r.user_id = u.id
    JOIN events e ON r.event_id = e.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};
