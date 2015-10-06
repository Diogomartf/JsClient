//Dependencies
var net = require('net');
var express = require('express');
var bodyParser = require("body-parser");
var q = require("q");
var router = express.Router();



router.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // log each request to the console
    console.log(req.method, req.url);
    global.ip = req.body.ip;
    var javaclient = require('../java-socket-client'); 
    // continue doing what we were doing and go to the route
    next(); 
});
//Routes
router.get('/ips', function(req, res) {
     res.json(ips);
});

router.post('/ip', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
   // Ensure this code runs after getting the IPs from java server
   promise.then(function() {
     console.log("Ips resposta para JS Client : " + ips);
     res.json(ips);
   }, function(err) {
        console.log(err);
  });
});







//return router
module.exports = router;