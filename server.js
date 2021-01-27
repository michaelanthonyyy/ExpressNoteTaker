var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


// HTML Routes (frontend)
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


// API Routes (backend)
// =============================================================
// Changed from return response to db.json
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
    
});

// reads db.json file assigning id to each note
app.post("/api/notes", function (req, res) {
    let notesObject = JSON.parse(fs.readFileSync('/db/db.json'));
    let noteBody = req.body
    // pushes parsed notes into saved notes
    notesObject.push(noteBody);
    // writes file to db.json
    fs.writeFile("./db/db.json", JSON.stringify(notesObject), function (err) {
        if (err) console.log(notes);
    })
    res.send();
})

//delete note
app.delete('/api/notes/:id', function (req, res) {
    let notesObject = JSON.parse(fs.readFileSync('/db/db.json'));
    notesObject.splice(req.params.id-10, 1);
    fs.writeFile("/db/db.json", JSON.stringify(notesObject), function (err) {
        if (err) console.log(notes);
    })
    res.send()
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



