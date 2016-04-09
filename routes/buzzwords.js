'use strict';
const express = require('express');
const router = express.Router();

let buzzwords = ['Social Mobile', 'Internet of things', 'Middle out', 'Big data', 'data mining'];

router.route('/:id')
  .get( (req, res) => {
    let id = req.params.id
    res.send(buzzwords[id]);
      });


router.route('/')
  .get( (req, res) => {
    res.json({
      users: buzzwords
    });
  });

router.post('/', (req, res) => {
  res.json({ success: true});
});

router.put('/', (req, res) => {
  res.json({ success: true, message: 'user updated!'});
});

router.delete('/', (req, res) => {
  res.json({ success: true, message: 'user removed'});
});

module.exports = router;
