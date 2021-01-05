const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./schema.js').User;
const config = require('./config.json');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('You are not authorized');
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, config.key, async (err, payload) => {
    if (err) {
      return res.status(401).send(err);
    }
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next()
  });
};