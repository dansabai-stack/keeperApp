const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const port = 4000;


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'dist')));


mongoose.connect('mongodb://localhost:27017/DiaryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const diarySchema = new mongoose.Schema({
    title: String,
    content: String
});
const Diary = new mongoose.model('Diary', diarySchema)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
    
});

app.get('/mye', (req, res) => {

    res.send('Hello');
    const newDiary = new Diary({
        title: req.body.title,
        content: req.body.content
    });
    newDiary.save();
});

app.listen(port, () => {
    console.log('server running on port 4000');
});
