var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());



// HTML Routes (frontend)
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// API Routes (backend)
// =============================================================
// Changed from return response to db.json after checking instructions
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "db/db.json"));
});

// Receive new notes to save on the request body and return the new note to the client
app.post("/api/notes"), function (req, res) {
    let newNote = req.body;
    console.log(noteId);
}

// Delete notes by unique ID
app.delete("/api/notes/:id", function (req, res) {
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
