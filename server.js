const path = require("path");
const express = require("express");

const PORT = 3001;
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));

// GET Route for feedback page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// Serve the CSS file
app.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, '/public/assets/css/styles.css')));

// Serve the JS file
app.get("/assets/js/index.js", (req, res) => res.sendFile(path.join(__dirname, "public/assets/js/index.js")));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);