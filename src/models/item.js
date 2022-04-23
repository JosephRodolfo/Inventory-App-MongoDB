const mongoose = require('mongoose')

const Item = mongoose.model('Item', {
    itemName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    category: {
        type: Array,
        required: true,
        trim: true
    }

})

module.exports = Item