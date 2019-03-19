const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let videoSchema = new Schema({
    name: {type: String, required: true, max: 100},
    url: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('video', videoSchema);