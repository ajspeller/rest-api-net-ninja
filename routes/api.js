const express = require('express');
const debug = require('debug')('app:api');

const router = express.Router();

// get a list of ninjas from the database
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET' });
});

// add a new ninja to the database
router.post('/ninjas', (req, res) => {
  const { body } = req;
  debug(`Request body: ${JSON.stringify(req.body)}`);
  res.send({
    body,
    type: 'POST'
  });
});

// update ninja in the database
router.put('/ninjas/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

// delete a new ninja from the database
router.delete('/ninjas/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;
