const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proudctSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: String,
    description: String
});

//Product => product + 's' => products
module.exports = mongoose.model('Product', proudctSchema);