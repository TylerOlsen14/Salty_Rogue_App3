const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema({
    client_name: {
        type: String
    },
    client_phonenumber: {
        type: String
    },
    client_conversation: {
        type: String
    },
    client_postcard: {
        type: Boolean
    }
});

module.exports = mongoose.model('Client', Client)