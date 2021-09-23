const bcrypt = require('bcryptjs');

const usernaame="hello";
const saltround = 10;
const mypassword = "hello world";

bcrypt.hash(mypassword,saltround,function(err,hash){
    console.log(hash);
})
