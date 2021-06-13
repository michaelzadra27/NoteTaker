const dataRout = require("express").Router();
const path = require("path");
const fs = require("fs");
// loads uuid module which allows for unique identifiers
const { v4: uuidv4 } = require("uuid");
//This route can read the db.json file where our data is saved and returns the data as JSON
dataRout.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            console.log("You have an Error");
            return;
        }
        console.log(data);
        var svData = [];
        svData = JSON.parse(data)
        return res.json(svData)
    })
});


//creating rout to save notes
dataRout.post("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            console.log("Error");
            return;
        }
        console.log(data)
        var note = []
        note = JSON.parse(data)
        let notes = {
            title: req.body.title,
            text: req.body.text,
            //uses the uuidv4 module to give the id a unique identifier
            id: uuidv4(),
        }

        //pushing note to the db.json file 
        note.push(notes)
        fs.writeFile(
            path.join(__dirname, "../db/db.json"),
            JSON.stringify(note),
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
              
                return res.json(note);
            }
        )
    })
});

module.exports = dataRout