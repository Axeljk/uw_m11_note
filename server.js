const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Handles static file requests.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static pages.
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// Handles notes route.
app.use("/api/notes", require("./routes/notesRoute"));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);