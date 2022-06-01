const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    Questions: {
        type: String,
        required : true
      },
    Ans : {
        type: String,
        required : true
    },
    a : {
        type: String,
        required : true
    },
    b : {
        type: String,
        required : true
    },
    c : {
        type: String,
        required : true
    },
    d : {
        type: String,
        required : true
    },

})


module.exports = mongoose.model('Question', questionSchema);