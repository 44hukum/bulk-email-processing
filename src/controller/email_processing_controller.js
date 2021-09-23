/**
 *  parse ecel
 * 
 */
const parseExcel= require('../services/parser/parse_excel_file');
const queue = require('../services/mail/queue');
const consumer = require('../services/mail/worker');
const fetch = (...args)=> import('node-fetch').then(({default: fetch})=> fetch(...args));

const { response } = require('express');

let process_emails = async (req,resp,next)=>{
    const response=parseExcel(req.files[0].path)
  
    queue(response).then(()=> {
                 resp.redirect('/dashboard')
     }).catch(()=>{}) //Queue
}

let process_request = async(req,resp,next)=>{
   
    response.render()
}
module.exports ={
    process_emails
}