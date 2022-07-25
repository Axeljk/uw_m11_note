const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

// Handles static file requests.
app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/public/index.html")));
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html")));

// Handles routes.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use("/api/pets", require("./routes/notesRoute.js"));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);