const db = require('../config/db');
const bcrypt = require('bcrypt');

// Register User
exports.register = (req, res) => {
  const { name, email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, hashed], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User registered successfully' });
  });
};

// Login User
exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send({ message: 'User not found' });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).send({ message: 'Incorrect password' });

    res.send({ message: 'Login successful', user });
  });
};

exports.getAllUsers = (req, res) => {
  db.query('SELECT id, name, email, role FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};

