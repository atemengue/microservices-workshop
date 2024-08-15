const mongoose = require('mongoose');

class MongooseSingleton {
  constructor() {
    if (!MongooseSingleton.instance) {
      MongooseSingleton.instance = this;
    }
    return MongooseSingleton.instance;
  }

  async connect(uri, options) {
    if (!this.connection) {
      try {
        this.connection = await mongoose.connect(uri, options);
        console.log('Database connected successfully');
      } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
      }
    }
    return this.connection;
  }
}

const instance = new MongooseSingleton();
Object.freeze(instance);

module.exports = instance;
