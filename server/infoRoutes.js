const router = require('express').Router();
const History = require('./schema.js').History;
const Address = require('./schema.js').Address;
const Credit = require('./schema.js').Credit;
const mongoose = require('mongoose');
const config = require('./config.json');
const requireAuth = require('./requireAuth.js');

router.use(requireAuth);

router.post('/credit', (req, res) => {
  const { creditcards } = req.body;
  const userId = req.user._id;
  Credit.update({userId}, { creditcards, userId}, {upsert: true})
    .then(() => {
      res.status(200).send('Credit card upserted!');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/credit', (req, res) => {
  Credit.find({ userId: req.user._id})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post('/address', (req, res) => {
  const { addresses } = req.body
  const userId = req.user._id;
  Address.update({userId}, { addresses, userId }, { upsert: true })
    .then(() => {
      res.status(200).send('Upserted Address Info');
    })
    .catch((err) => {
      res.status(400).send(err.message);
    })
});

router.get('/address', (req, res) => {
  Address.find({userId: req.user._id})
    .then((results) => {
      // res.status(200).send(results[0].addresses);
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.post('/submit', (req, res) => {
  const { businessId, businessName, appointmentReason, dateTime, address } = req.body;
  const userId = req.user._id;

  History.create({ businessId, businessName, appointmentReason, dateTime, address, userId })
    .then(() => {
      res.status(200).send('Posted to history!');
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/history', (req, res) => {
  History.find({ userId: req.user._id })
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

module.exports = router;