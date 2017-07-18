const mongoose = require('mongoose');

// Update/edit this URL if needed
const MONGO_URL = 'localhost/camping-guide';
const conn = mongoose.createConnection(`mongodb://${MONGO_URL}`, {
  useMongoClient: true
});

module.exports = conn;
