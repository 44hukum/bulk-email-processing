const server = require('ws').Server;
const worker = require('../src/services/mail/worker');

const ws = new server({port:8090});
ws.on('connection',(ws)=>{
    console.log('client connected')
         ws.on('message',(message)=>{
            console.log("s",message)
            worker(ws).then((info)=>{
         
            })
        });
    //    aa(ws).then(()=>{})
          
    }
)

//start working with consumers
// async function aa(ws){
//     await setInterval(()=>{
//         ws.send("hyman")
//     },10)
// }