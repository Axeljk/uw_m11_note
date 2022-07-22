const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

// Handles static file requests.
app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// GET Route for feedback page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);