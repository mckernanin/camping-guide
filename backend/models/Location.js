const mongoose = require('mongoose');
const Mongo = require('./index');

const Activities = require('../enums/Activities');

const LocationModel = Mongo.model('Location', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: false
  },
  activities: [{
    type: Object,
    required: false,
    enum: Activities
  }]
}, {
  timestamps: true
}));

module.exports = LocationModel;
