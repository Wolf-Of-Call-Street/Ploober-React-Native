const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addressSchema = new mongoose.Schema({
  line1: String,
  line2: String,
  zipcode: String,
  state: String,
  city: String
});

const creditSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true
  },
  billingAddress: addressSchema,
  expiry: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const historySchema = new mongoose.Schema({
  businessId: {
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

// const userInfoSchema = new mongoose.Schema({
//   addresses: [addressSchema],
//   creditcards: [creditSchema],
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     unique: true
//   }
// });

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(15, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(potentialPassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(potentialPassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};


const User = mongoose.model('User', userSchema);
// const UserInfo = mongoose.model('UserInfo', userInfoSchema);
const Credit = mongoose.model('Credit', creditSchema);
const Address = mongoose.model('Address', addressSchema);
const History = mongoose.model('History', historySchema);

module.exports = { User, Credit, Address, History };