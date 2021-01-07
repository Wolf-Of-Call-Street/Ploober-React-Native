const router = require('express').Router();
const UserInfo = require('./schema.js').UserInfo;
const History = require('./schema.js').History;
const mongoose = require('mongoose');
const config = require('./config.json');
const requireAuth = require('./requireAuth.js');

router.use(requireAuth);

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

router.post('/address', async (req, res) => {
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
  History.create(req.body)
    .then(() => {
      res.status(200).send('Posted to history!');
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/history/:id', (res, req) => {
  History.find({_id: req.params.id})
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch((err) => {
      res.status(400).send('Error for getting history!')
    })
})

module.exports = router;