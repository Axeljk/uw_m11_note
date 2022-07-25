const fs = require("fs");
const express = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
	fs.readFile("./db/db.json", "utf8", (err, data) => {
		if (err)
			console.error(err);
		console.log("Wheee");
	});
});

module.exports = router;