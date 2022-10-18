const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(authRoutes);

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
