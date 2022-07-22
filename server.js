const path = require("path");
const express = require("express");

const PORT = 3001;
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);