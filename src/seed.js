//seeding email templtes 
const mongoose = require("mongoose");
const email = require('./models/emails');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bulk_emailProcessing",
{ useNewUrlParser: true});

mongoose.connection; //mongoose connection

let emailTemplates =[ //email templates
    {
        to:"",
        from:"",
        subject:"marvel comic update",
        html:"<h1>Welcome to Marvel universe,hope you enjoy here</h1>",
        text:" You have subscribed to our newsletter, Thanks",

    },{
        to:"",
        from:"",
        subject:"Ekbana knowledge group invitation",
        html:"<h1>Welcome to ekbana,hope you enjoy here</h1>",
        text:" You have subscribed to our newsletter, Thanks",

    },{
        to:"",
        from:"",
        subject:"Rewriting universe from core 0",
        html:"<h1>Welcome to the knowledge foundation,hope you enjoy here</h1>",
        text:" You have subscribed to our newsletter, Thanks",

    },{
        to:"",
        from:"",
        subject:"Let's go to the mars",
        html:"<h1>Welcome to mars,hope you enjoy here</h1>",
        text:" You have subscribed to our newsletter, Thanks",

    },{
        to:"",
        from:"",
        subject:"wonderland invitation",
        html:"<h1 style='color: red'>Enjoy being here</h1>",
        text:" You have subscribed to our newsletter, Thanks",

    }
];

email.deleteMany() //remove all the existing data
.exec() //promisied mongoose
.then(()=>{
    //Email template's is empty
});

let seedCommand=[];//info

emailTemplates.forEach((template)=>{ //CREATE DATABASE AND ASSIGN emails
    seedCommand.push(email.create({ 
        emails:{
        to: template.to,
        from: template.from,
        subject: template.subject,
        html:template.html,
        text: template.text
        }
    }))
});
Promise.all(seedCommand)
.then(info=>{
    //log result
    console.log(info)
    mongoose.connection.close() //close connection
}).catch(err=>{
    //someerrors have to log
    console.log(err)
})