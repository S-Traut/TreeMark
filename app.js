
const express = require('express')
const app = express()
const port = 6564

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
})

app.listen(port, () => {
})

 