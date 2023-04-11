const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


let userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            default: "",
            trim: true,
            required: "email address is required",
        },
        password: {
            type: String,
            default: "",
            trim: true,
            required: "password is required",
        },
    }
    
  );
  
userSchema.plugin(passportLocalMongoose, {usernameField : "password"});

module.exports = mongoose.model('User', userSchema);