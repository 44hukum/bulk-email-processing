const amqp = require('amqplib');
const nodemailer = require('nodemailer');

async function worker(ws){
    try{
        const connection =await amqp.connect('amqp://localhost:5672'); //create connection on AMQP server
        const channel = await connection.createChannel(); //create channel multiplexing

        const result = await channel.assertQueue("emails"); //queue for emails
        console.log("started consumer");

       channel.consume('emails',message=>{ //get email addresses from queue
         msg = JSON.parse(message.content);
         /** STARTS MAIL HANDLING */  
         let mailbox = nodemailer.createTransport({ //HANDLE SMTPS, service mailtrap 
            host:"smtp.mailtrap.io",
            port:2525,
            auth:{
                user: "71986a26767d43",
                pass: "9873b250bfc71b"
            }
        });   
       
         let info = mailbox.sendMail({ //send emails
                    from: 'someone@example.com', // sender address
                    to: msg, // list of receivers
                    subject: "Hello ", // Subject line
                    text: "Hello world?", // plain text body
                   
                },(err,info)=>{
                    if(info){
                       channel.ack(message);                    
                       info.response.slice(0,3)==="250"? ws.send(msg):console.log("ERR")
                        return 
                    }
                });

            /** ENDS MAIL HANDLING */
                
    })
      if(result.get('email')== false){
          connection.close();
      }
    }catch(err){
    console.log(err)
    }
}

module.exports = worker;