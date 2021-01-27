var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

let notes = []
// HTML Routes (frontend)
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// API Routes (backend)
// =============================================================
// Changed from return response to db.json after checking instructions
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// reads db.json file assigning id to each note
app.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "./db/db.json"), "utf8", function (err) {
        if (err) throw err;
    });
    let noteBody = req.body;
        // correctly writes file to db.json
        fs.writeFile("./db/db.json", JSON.stringify(noteBody), function (err) {
                if (err) console.log(noteBody);
        });
});



//delete note
app.delete('/api/notes/:id', function (req, res) {

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
