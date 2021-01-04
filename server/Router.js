const router = require('express').Router();
const User = require('./schema.js').User;
const UserInfo = require('./schema.js').UserInfo;
const mongoose = require('mongoose');

router.post('/creditCard', (req, res) => {
  UserInfo.create(req.body)
    .then(() => {
      res.status(200).send('Credit card added!');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/creditCard/:id', (req, res) => {
  UserInfo.find({ _id: req.params.id})
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post('/address', (req, res) => {
  const user = UserInfo.create(req.body)
    .then(() => {
      res.status(200).send('Address added!');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/address/:id', (req, res) => {
  UserInfo.find({_id: req.params.id})
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

// make a route for post request for makign a new user

module.exports = router;