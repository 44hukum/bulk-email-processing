'use strict';

const express = require("express");
const mongoose = require("mongoose");

const expressHandlebars = require('express-handlebars');
const path=require("path");

const router = require('./router/routes');
const cookieParser = require("cookie-parser");
const connectFlash = require('connect-flash');
const expressSession = require("express-session");



;
const app = express();

app.engine('hbs',expressHandlebars({ //template engine 
  defaultLayout: false,
  extname:'.hbs',
  layoutsDir:"views/layouts/"
}));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router.use(cookieParser(process.env.SECRETE)); //session and cokie starts here
router.use(expressSession({
  secret:process.env.SECRETE,
  cookie:{
    maxAge:400000
  },
  resave: false,
  saveUninitialized: false
}));


router.use(connectFlash());
router.use((req,res,next)=>{
  res.locals.flashMessages = req.flash();
  next()
})
 //session and cookie setup ends here
 
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.get("/", (request, response, next) => { //MIDDLEWARE 
  response.render('login',{layouts: 'main'});
 });

app.get("/signup", (request, response, next) => { //MIDDLEWARE 
  response.render('signup');
 
});

app.use('/dashboard',router);

app.use((request, response, next) => {
  response.status(500);
  response.render('error500');
});


app.use((request, response, next) => {
  response.status(404);
  response.render('404')
});


module.exports = app;