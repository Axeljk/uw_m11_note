const fs = require("fs");
const express = require("express");
const router = express.Router();

/*
	GET request:
		Reads the db.json file and responds to the GET request with it.
 */
router.get("/", (req, res) => {
	let database = getDb();
	res.json(database);
});

/*
	POST request:
		Reads the db.json file.
		Gives the POST entry a unique id and adds it to the end of the database.
		Saves the database back to db.json.
		Ends with a courtesy response letting client know it's complete.
 */
router.post("/", (req, res) => {
	let database = getDb();
	req.body.id = newId(database);
	database.push(req.body);
	setDb(database);
	res.send("Saved.");
});

/*
	DELETE request:
		Reads the db.json file.
		Creates an array of ids from it and gets the index of the entry matching
			the request. Then removes said entry.
		Saves the database to db.json.
		Gives client a courtesy response to let them know the deed is done.
 */
router.delete("/:note", (req, res) => {
	let database = getDb();
	let ids = database.map(e => e.id);
	let deleteIndex = ids.indexOf(parseInt(req.params.note));
	database.splice(deleteIndex, 1);
	setDb(database);
	res.send("Deleted.");
});

/*
	Get and Set for the database (db) file.
	Essentially asliases of fs' readFileSync and writeFileSync.
 */
const getDb = () => JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
const setDb = (db) => fs.writeFileSync("./db/db.json", JSON.stringify(db, null, 4));

/*
	Creates a new, unique ID by creating an array of all existing IDs.
		- If there are any IDs, take the biggest one and return it (+1).
		- Otherwise there aren't any, so return 0.
 */
function newId(db) {
	let ids = db.map(e => e.id);

	if (ids.length > 0)
		return Math.max(...ids) + 1;
	else
		return 0;
}

module.exports = router;