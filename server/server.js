const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./config/db');  // import MySQL connection

const app = express();
const PORT = process.env.PORT || 5000;

// Test MySQL connection
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);  // stop server if DB connection fails
  } else {
    console.log('Connected to MySQL database!');
  }
});

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



