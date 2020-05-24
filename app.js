const express = require('express');
const bodyParser = require('body-parser');
const sorting = require('./sorting');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/bubblesort', (req, res) => {
    console.log('ini body');
    var arr = req.body.array;
    var sortedArr = sorting.bubbleSort(arr);
    res.send(sortedArr);
});

app.post('/api/mergesort', (req, res) => {
    console.log('ini body');
    var arr = req.body.array;
    var sortedArr = sorting.mergeSort(arr);
    res.send(sortedArr);
});

app.listen(port, () => {
    console.log('Yee listen ke port ini');
});