
const express = require('express'); //import express
const app = express();
const bodyParser = require('body-parser'); //import body-parser
const adminRoutes = require('./routes/admin'); //import admin routes
app.use(adminRoutes); //use admin routes
app.use(bodyParser.urlencoded()); //use body-parser to parse urlencoded data
app.listen(8000)



//Middle ware
//handling different url
//parsing data from
//router methods--get/pos
//using express js Router