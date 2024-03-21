const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
  cityName: { type: String },
  country: { type: String },
  emoji: { type: String },
  date: { type: Date },
  notes: { type: String, default: '' },
    position: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    }
});

const City = mongoose.model('cities', citySchema);

module.exports = City;
