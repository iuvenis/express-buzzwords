'use strict';
const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser');
let   buzzwords = [],
      score = [];

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

router.route('/')
  .get( (req, res) => {
    res.json({
      buzzwords: buzzwords });
  });

router.post('/', (req, res) => {
  req.body.buzzword;
  req.body.points;
  let buzzObj = ({
    'buzzword': req.body.buzzword,
    'score': req.body.points,
    heard: false
  });
  buzzwords.push(buzzObj);
  res.json({ success: true });
});

router.put('/', (req, res) => {
    if (buzzwords.length === 0) {
      return res.status(400).send('Bad Request: There are no buzzwords');
    }
    for (var i = 0; i<buzzwords.length; i++) {
      if (buzzwords[i].buzzword === req.body.buzzword) {
        buzzwords[i].heard = req.body.heard;
        score = Number(req.body.points);
        buzzwords[i].score = score;
        return res.json({
          success: true,
          newScore: score
        });
      }
    }
    return res.status(400).send('Bad Request: Not an existing buzzword');
  });

router.delete('/', (req, res) => {
    var buzzIndex;
    if (buzzwords.length === 0) {
      return res.status(400).send('Bad Request: There are no buzzwords');
    }
    for (var k = 0; k < buzzwords.length; k++) {
      if (buzzwords[k].buzzword === req.body.buzzword) {
        buzzwords.splice(k, 1);
        return res.json({
          success: true
        });
      }
    }
    return res.status(400).send('Bad Request: Not an existing buzzword');
  });

module.exports = router;