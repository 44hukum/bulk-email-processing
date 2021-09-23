const mongoose = require('mongoose');
let emailSchema = mongoose.Schema({
    emails:{
        to: String,
        from:String,
        subject:String,
        html:String,
        text:String
    }
});

modules.exports = mongoose.model('email',emailSchema,'emails');