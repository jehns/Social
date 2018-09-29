const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB. "then" returns a promise.
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// Route to verify connection.
app.get('/', (req, res) => res.send('Hello!!!!!'));

// process.env.PORT for deployment on Heroku. Or port 5000.
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server running on port ${port}`));
