const notes = require('express').Router();
const {v4: uuidv4} = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile
} = require('../helpers/fsUtils');
//http://localhost:3001/api/notes/
notes.get('/', (req, res)=> {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
//http://localhost:3001/api/notes/
notes.post('/', (req, res)=> {
    console.log(req.body);
    const {title, text}= req.body;

    if(req.body) {
        const newTip = {
            title,
            text,
            id: uuidv4(),
        };
        const parseData = readAndAppend(newNote, './db/db.json');
        res.json(parseData);
    }else {
        res.error('Error in adding note');
    }
});

module.exports = notes;
