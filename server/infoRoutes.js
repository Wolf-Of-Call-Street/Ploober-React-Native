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
  try{
    const info = new UserInfo({ addresses, userId: req.user._id});
    await info.save();
    res.status(200).json(info);
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
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