const mongoose = require('mongoose');

//need db name
mongoose.connect('mongodb://127.0.0.1:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;