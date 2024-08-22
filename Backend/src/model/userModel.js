const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


//Attributes
const userSchema = mongoose.Schema({
    name : { 
        type : String,
        required : true
    },

    username : {
        type : String,
        required: true,
        unique : true
    },

    password : {
        type : String,
        require : true
    }

}, {timestamps:true})


// schema methods
userSchema.methods.getJWTToken = function (expiry, secret) {
  const token = jwt.sign({ user: this}, secret, {
    expiresIn: expiry,
  });
    return token
  };
  
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


  //exporting
module.exports =  mongoose.model('User', userSchema)