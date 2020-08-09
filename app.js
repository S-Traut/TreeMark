var express = require('express');
var path = require('path');
const app = express();
const port = 6564

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/public/index.html');
})

app.listen(port, () => {

})



