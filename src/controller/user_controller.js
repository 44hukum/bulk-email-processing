const users = require('../models/user_model');

//create
let create_user = (request,response,next)=>{
    let newUser = new users({ //creates new user
        username: request.body.username,
        password: request.body.password,
        email: request.body.email
    
    });
    newUser.save((err,info)=>{
        if(err) {next(err)}
            response.redirect('dashboard');
    })
   
   
}

//read
 exports.read_user = (request,response,next)=>{

}

//update
let update_user = (request,response,next)=>{

}

//delete
let delete_user = (request,response)=>{

}

//validate user
let validate_user =(request,response,next)=>{  //verify user using passport js
    
    console.log("Hello world");
    response.redirect('/dashboard');
}

module.exports = {
    create_user,
    validate_user
}