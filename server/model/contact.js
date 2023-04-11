const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
      }
})

const Contactdb = mongoose.model('Contactdb', contactSchema);

module.exports = Contactdb;