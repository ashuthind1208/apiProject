const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        min:6,
        required:true
    },
    email:{
        type: String,
        min:6,
        required:true
    },
    password:{
         type: String,
         min:6,
         max:2550,
         required:true
    },
    date :{
          type: Date,
          default:Date.now
    }
})

module.exports = mongoose.model('Users',userSchema);