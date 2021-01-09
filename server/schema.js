const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const addressSchema = new mongoose.Schema({
  line1: String,
  line2: String,
  zipcode: String,
  state: String,
  city: String,
});

const multiAddressSchema = new mongoose.Schema({
  addresses: [ addressSchema ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const creditSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
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
  cvc: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const multiCreditSchema = new mongoose.Schema({
  creditcards: [ creditSchema ],
  city: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const historySchema = new mongoose.Schema({
  businessId: {
    type: String,
    required: true
  },
  businessName: {
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
  address: addressSchema,
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
const Credit = mongoose.model('Credit', multiCreditSchema);
const Address = mongoose.model('Address', multiAddressSchema);
const History = mongoose.model('History', historySchema);

module.exports = { User, Credit, Address, History };
