const express = require('express'); //import express

const app = express();

app.use('/first',(req,res,next)=>{   //use is a middleware function--3 parameters--req,res,next
    //next is a function that will call the next middleware
    console.log('Middleware 1'); 
    res.send('<h1>Hello from first middleware</h1>'); //send response to the client  
    
});
app.use('/second',(req,res,next)=>{
 console.log('Middleware 2'); //middleware function
  res.send('<h1>Hello from first middleware</h1>'); //send response to the client
});
app.use((req,res,next)=>{
 console.log('Common'); 
  res.send('<h1>Common middleware</h1>'); //always works
});




app.listen(8000)


//Middle ware
//handling different url
//parsing data from