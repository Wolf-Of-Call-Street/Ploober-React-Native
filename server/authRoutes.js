const router = require('express').Router();
const User = require('./schema.js').User;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('./config.json');

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