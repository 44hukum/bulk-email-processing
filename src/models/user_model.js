const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({ //CREATED DOCUMENT STRUCTURE 
     username: {
        type: String,
        require: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

})

userSchema.pre("save",async function(next){ //hash password
    let user=this;
    await bcrypt.hash(user.user.password, 10).then(function(hash) {
        user.user.password = hash;
    });
next();
})
userSchema.methods.getInfo = function(){ //gives information about the user
    return `username: ${this.username}`
};
module.exports = mongoose.model("users",userSchema)