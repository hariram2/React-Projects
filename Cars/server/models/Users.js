const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const SchemaUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Kilometer: {
        type: Number,
        required: true,
    },
    cartype: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
});

const ModelUser = mongoose.model("users", SchemaUser);
module.exports = ModelUser;