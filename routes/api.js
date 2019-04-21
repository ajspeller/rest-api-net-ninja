const express = require('express');
const debug = require('debug')('app:api');

const Ninja = require('../models/ninja');

const router = express.Router();

// get a list of ninjas from the database
router.get('/ninjas', (req, res, next) => {
  res.send({ type: 'GET' });
});

// add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body)
    .then((ninja) => {
      res.send(ninja);
    })
    .catch(next);
});

// update ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
  res.send({ type: 'PUT' });
});

// delete a new ninja from the database
router.delete('/ninjas/:id', (req, res, next) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;
