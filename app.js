const http = require('http');
const express = require('express'); //import express

const app = express();
app.use((req,res,next)=>{
    console.log('Middleware 1');    
    next();
});
app.use((req,res,next)=>{   //use is a middleware function--3 parameters--req,res,next
    //next is a function that will call the next middleware
    console.log('Middleware 2');   
    next();                 //way to next middleware
});
app.use((req,res,next)=>{
    console.log('Middleware 3');    //expect response in last middleware
    //send--res.send('Hello from express'); //send response
 res.send({test:"json"})
});


const server = http.createServer(app);
server.listen(8000);

//Middle ware