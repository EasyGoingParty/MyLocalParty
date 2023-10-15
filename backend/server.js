const express = require('express');
const userRoutes = require('./src/user/routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/v1/users', userRoutes);

app.listen(PORT, () => console.log("app is listening on port ${PORT}"));

