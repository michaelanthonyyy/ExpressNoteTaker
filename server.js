var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// HTML Routes (frontend)
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "assets/notes.html"));
});


// Reads and displays all saved notes as JSON
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

// Receive new notes to save on the request body and return the new note to the client
app.post("/api/notes"), function (req, res) {
    var newNote = req.body;
    console.log(newNote);
}

// Delete notes by unique ID
app.delete("/api/notes/:id", function (req, res) {
    var index = req.body.index;
    var temp = [];
    for (var i = 0; i < notes.length; i++) {
        if (i !== parseInt(index)) {
            temp.push(tables[i]);
        }
    }
    tables = temp;
    res.send("note removed!")
})