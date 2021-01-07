const router = require('express').Router();
const UserInfo = require('./schema.js').UserInfo;
const History = require('./schema.js').History;
const mongoose = require('mongoose');
const config = require('./config.json');
const requireAuth = require('./requireAuth.js');

router.use(requireAuth);

router.post('/creditCard', (req, res) => {
  const { creditcards, addresses } = req.body;
  const userId = req.user._id;
  UserInfo.update({userId}, { creditcards, addresses, userId}, {upsert: true})
    .then(() => {
      res.status(200).send('Credit card upserted!');
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
  const { addresses } = req.body
  const userId = req.user._id;
  UserInfo.update({userId}, { addresses, userId }, { upsert: true })
    .then(() => {
      res.status(200).send('Upserted Address Info');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.get('/address', (req, res) => {
  UserInfo.find({userId: req.user._id})
    .then((results) => {
      res.status(200).send(results[0].addresses);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
});

router.post('/submit', (req, res) => {
  const { businessId, appointmentReason, dateTime } = req.body;
  const userId = req.user._id;

  History.create({ businessId, appointmentReason, dateTime, userId })
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