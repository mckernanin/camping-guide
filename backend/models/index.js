const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.DATABASE, {
  useMongoClient: true
});

module.exports = conn;
