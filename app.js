'use strict';
const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();


const userBuzzwords = require('./routes/buzzwords');
app.use(express.static('public'));
app.use('/buzzwords', userBuzzwords);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// /buzzword route
var buzzwordsRoute = require('./routes/buzzwords');

app.use(express.static('public'));

app.get('/buzzwords', (req, res) => {

   return res.json({
    buzzwords: buzzwords
  });
})
.post('/reset', (req, res) => {

  score = 0;
  buzzwords.splice(0);
  return res.json({
    success: true
  });
});

const server = app.listen(3000, () => {
  let host = server.address().address,
      port = server.address().port;
  console.log('listening at http://%s:%s', host, port);
});
