const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema der DB-Collection
const LizardSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    color: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

// Collection
const Lizard = mongoose.model('lizard', LizardSchema);

module.exports = Lizard;