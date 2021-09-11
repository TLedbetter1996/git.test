const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const promotionSchema = new Schema ({
    name: {
        featured: true,
        string: true,
    },
    image: {
        featured: true,
        string: true 
    },
    cost: {
        featured: true,
        type: Number
    },
    description: {
        featured: true
    },
    featured: {
        type: Boolean,
        default: false
    }
});

const Promotion = mongoose.model('Promotion', partnerSchema)

module.exports = Promotion; 