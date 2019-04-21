const express = require('express');
const debug = require('debug')('app:api');

const Ninja = require('../models/ninja');

const router = express.Router();

// get a list of ninjas from the database
router.get('/ninjas', (req, res, next) => {
  // Ninja.find({}).then((ninjas) => {
  //   res.send(ninjas);
  // });
  const { lng, lat } = req.query;
  Ninja.aggregate()
    .near({
      near: {
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)]
      },
      maxDistance: 100000,
      spherical: true,
      distanceField: 'dis'
    })
    .then((ninjas) => {
      res.send(ninjas);
    });
});

// add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body)
    .then((ninja) => {
      debug(ninja);
      res.send(ninja);
    })
    .catch(next);
});

// update ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
  const { id } = req.params;
  Ninja.findByIdAndUpdate({ _id: id }, req.body).then(() => {
    Ninja.findById({ _id: id }).then((ninja) => {
      debug(ninja);
      res.send(ninja);
    });
  });
});

// delete a new ninja from the database
router.delete('/ninjas/:id', (req, res, next) => {
  const { id } = req.params;
  Ninja.findByIdAndRemove({ _id: id }).then((ninja) => {
    debug(ninja);
    res.send(ninja);
  });
});

module.exports = router;
