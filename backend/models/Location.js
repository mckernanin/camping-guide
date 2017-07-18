const Mongo = require('./index');

const Activities = require('../enums/Activities');

const LocationModel = Mongo.model('Location', {
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
});

module.exports = LocationModel;
