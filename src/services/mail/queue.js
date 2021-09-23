const amqp = require('amqplib');

//bring emails from users
const email=['email1@skks','email1@skks','email1@skks','email1@skks','email1@skks','email1@skks',
         'email1@skks','email1@skks','email1@skks','email1@skks',
        'email1@skks','email1@skks','email1@skks','email1@skks','email1@skks'        
        ];


async function emailQueue(email){
    let pointer=1001;
   
        const connection =await amqp.connect('amqp://localhost:5672'); //create connection on AMQP server
        const channel = await connection.createChannel(); //create channel multiplexing

        const result = await channel.assertQueue("emails"); //queue for emails
         //creates channels
        email.forEach(mail=>{
            channel.sendToQueue("emails",Buffer.from(JSON.stringify(mail)));
        });  
}

module.exports = emailQueue; 