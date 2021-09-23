const app = require('./src/app');
const http = require('http');
const dotenv = require("dotenv");
const mongoose = require('mongoose');

/** STARTS HERE */
mongoose.Promise = global.Promise
dotenv.config();

const PORT = process.env.PORT || 7000
const server=http.createServer(app);


mongoose.connect( //database connection
  "mongodb://localhost:27017/bulk_email_processing",
  { useNewUrlParser: true },
  (err, database) => {
    if (err) console.log(err);
    console.log("MONGODB IS WORKING");
  }
);




server.listen(PORT, () => {
  //if() console.log(error);
  console.log(`Mail processor started on http://localhost:${PORT}`);
});

//unhanded errors
process.setUncaughtExceptionCaptureCallback(e=>{
  console.log(e,"handaled");
})

//REJECTED PROMISES
process.on('unhandlendRejection',(reason,promise)=>{

})
/** ENDS HERE */

/**************roceketman********************** */



