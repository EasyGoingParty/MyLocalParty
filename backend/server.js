require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;
const db = require('./db');

app.get('/api/users', async (req, res) => {
    try {
      const users = await db.any('SELECT * FROM users');
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

app.get('/api', (req, res) => {
  res.send('Hello from Express API!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
