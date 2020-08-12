var express = require('express');
var path = require('path');
const Datastore = require('nedb');

const app = express();
const port = 6564
const database = new Datastore('database.db');
database.loadDatabase();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/public/index.html');
})

app.listen(port, () => {

})