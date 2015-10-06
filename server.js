//dependencies
var express = require('express'); 
var bodyParser = require('body-parser');
var path = require('path');


//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('Servidor port 3000');