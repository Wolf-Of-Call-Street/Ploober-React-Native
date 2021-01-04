const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  line1: String,
  line2: String,
  zipcode: Number,
  state: String,
  city: String
});

const creditSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  billingAddress: addressSchema,
  expDate: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const historySchema = new mongoose.Schema({
  businessID: {
    type: String,
    required: true
  },
  appointmentReason: {
    type: String,
    required: true
  },
  dateTime: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

const userInfoSchema = new mongoose.Schema({
  addresses: [addressSchema],
  creditcards: [creditSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const User = mongoose.model('User', userSchema);
const UserInfo = mongoose.model('UserInfo', userInfoSchema);
const History = mongoose.model('History', historySchema);

module.exports = { User, UserInfo, History };