/* =======================
    LOAD THE DEPENDENCIES
==========================*/
const express = require('express');
require("dotenv").config();
const fs = require('fs');
const path = require('path')
var bodyParser = require('body-parser')

/* =======================
    LOAD THE CONFIG
==========================*/
const { PORT } = require('./config/config');



/* =======================
    EXPRESS CONFIGURATION
==========================*/
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();
});


/* =======================
        ROUTES
==========================*/
const home = require('./routes/home');


/* =======================
        MOUNT
==========================*/
app.use(home);




/* =======================
    CONNECT TO MONGODB SERVER
==========================*/
app.listen(PORT, console.log("Application available at http://localhost:" + PORT));
