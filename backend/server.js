const express = require('express');
const userRoutes = require('./src/user/routes');
const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const connectDb = async () => {
  try {
      await pool.connect()
      console.log("Connect successfully")
  } catch (error) {
      console.log(error)
  }
}

connectDb();

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => console.log("app is listening on port ${PORT}"));

