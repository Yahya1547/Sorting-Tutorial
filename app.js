const express = require('express');
const bodyParser = require('body-parser');
const sorting = require('./sorting');

var app = express();
var port = 5000;

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

app.get('/api/hello', (req, res) => {
    res.send('hello world');
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}


app.listen(port, () => {
    console.log('Yee listen ke port ini');
});