const Mongo = require('./index');

const UserModel = Mongo.model('User', {
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: 'Please Supply an email address'
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true
  },
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

module.exports = UserModel;
