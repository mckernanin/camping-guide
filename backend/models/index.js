const mongoose = require('mongoose');

// Update/edit this URL if needed
const MONGO_URL = 'localhost/camping-guide';
const conn = mongoose.connect(`mongodb://${MONGO_URL}`);

module.exports = conn;
