const mongoose = require('mongoose');

const { Schema } = mongoose;

// create ninja schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required!']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
