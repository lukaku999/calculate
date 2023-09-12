const express = require("express");

const app = express();
const port = 3000;

// Define a route that responds with "Hello, World!"
app.get("/calculate", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  const c = (a + b).toString();
  res.send(`calculte: ${c}`);
});

app.get("/calculate/:name", (req, res) => {
  const name = req.params.name;
  res.send(`${name} calculte: ${c}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
