const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./config/db');  // import MySQL connection

const app = express();
const PORT = process.env.PORT || 5000;

// Test MySQL connection

require('dotenv').config();
const mysql = require('mysql');

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

module.exports = connection;


// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('College Event Management Backend Running 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);


const registrationRoutes = require('./routes/registrationRoutes');
app.use('/api/registrations', registrationRoutes);



