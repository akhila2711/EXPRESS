
const express = require('express'); //import express
const app = express();
const bodyParser = require('body-parser'); //import body-parser
app.use(bodyParser.urlencoded()); //use body-parser to parse urlencoded data
app.listen(8000)


//Middle ware
//handling different url
//parsing data from
//router methods--get/pos
//using express js Router