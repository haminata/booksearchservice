var express = require('express'),
    app = express(),
    port =  process.env.PORT || 3210;
    // bodyParser = require('body-parser'),
    // request = require('request'),
    // googleSearchAPI = '';
app.get('/', function(req, res){
    res.json("Welcome to book search");
});
app.listen(port)
