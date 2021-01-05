const router = require('express').Router();
const User = require('./schema.js').User;
const UserInfo = require('./schema.js').UserInfo;
const History = require('./schema.js').History;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('./config.json');

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

router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    const token = jwt.sign({ userId: user._id }, config.key);

    res.send({ token });
  } catch (err) {
    return res.status(422).send(err);
  };
});

router.post('/signin', async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(422).send('Need username and password!');
  }

  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(422).send('Invalid username or password!');
  }

  try {
    await user.comparePassword(req.body.password);
    const token = jwt.sign({ userId: user._id }, config.key);
    res.send({ token });
  } catch (err) {
    return res.status(422).send('Invalid username or password!');
  }

});

module.exports = router;