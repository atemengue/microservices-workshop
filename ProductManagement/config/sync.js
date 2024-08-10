const moongoseSingleton = require('./mongooseSingleton');
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  autoIndex: true
};

const mongoConnect = function () {
  moongoseSingleton.connect(process.env.URI_WINDOWS, options)
}


module.exports = { mongoConnect }
