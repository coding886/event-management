
const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Use mysql2 instead of mysql
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

// MySQL Connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ', err);
  } else {
    console.log('Connected to MySQL successfully!');
  }
});

// Export connection if needed elsewhere
module.exports = connection;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('College Event Management Backend Running 🚀');
});

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

const registrationRoutes = require('./routes/registrationRoutes');
app.use('/api/registrations', registrationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
