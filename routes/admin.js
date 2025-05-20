
const express = require('express'); //import express

const router = express.Router(); //create a router object

const bodyParser = require('body-parser'); //import body-parser
router.use(bodyParser.urlencoded({extended:false})); //use body-parser to parse urlencoded data

router.get('/add-product',(req,res)=>{   //use is a middleware function--3 parameters--req,res,next
   res.send('<form action="/show-product" method="POST"><input type="text" name="title"><button type="submit" value="submit">Add Product</button></form>'); //send response to the client
    
});
router.post('/show-product',(req,res)=>{
    console.log("form data",req.body);
    res.send('<h1>Product Added Successfully</h1>');
  
});

module.exports = router; //export the router object
