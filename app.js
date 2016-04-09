'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const userBuzzwords = require('./routes/buzzwords');
app.use(express.static('public'));
app.use('/buzzwords', userBuzzwords);

app.get('/', (req, res) => {
  res.send('Hi Hi Hi');
});


const server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
