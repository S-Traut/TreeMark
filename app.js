var fs = require('fs');
var express = require('express');
var path = require('path');
var databaseJS = require('./public/database.js');
const Datastore = require('nedb');

const database = new Datastore('database.db');
const app = express();
const port = 6564

database.loadDatabase();
databaseJS.init(database);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    res.sendfile(__dirname + '/public/index.html');

});

app.listen(port, () => {

});