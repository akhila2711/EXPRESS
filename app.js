const express = require('express'); //import express

const app = express();
const bodyParser = require('body-parser'); //import body-parser
app.use(bodyParser.urlencoded()); //use body-parser to parse urlencoded data

app.get('/add-product',(req,res,next)=>{   //use is a middleware function--3 parameters--req,res,next
   res.send('<form action="/show-product" method="POST"><input type="text" name="title"><button type="submit" value="submit">Add Product</button></form>'); //send response to the client
    
});
app.post('/show-product',(req,res,next)=>{
    console.log("form data",req.body);
    res.send('Product Added Successfully');
  
});





app.listen(8000)


//Middle ware
//handling different url
//parsing data from