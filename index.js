'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Modem = require('docker-modem');

var app = express();
var dockerapi = express();

var dockerModem = new Modem();


// these statements config express to use these modules, and only need to be run once
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('node_modules'));
app.use('/', express.static('app'));
//var jsonParser = bodyParser.json();

app.use('/dockerapi', dockerapi);

var port = 9090;

app.listen(port, function () {
        console.log("Server listening on port " + port);
});

/**
 * List containers.
 */
dockerapi.get('/containers/json', function(req, res) {
    var request = {
        path: '/containers/json?',
        method: 'GET',
        statusCodes: {
            200: true,
            400: "bad parameter",
            500: "server error"
        }
    };
    dockerModem.dial(request, function(err, data) {
        if (err) {
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    });
});

/**
 * Container.
 */
dockerapi.get('/containers/:id/json', function(req, res) {
    var request = {
        path: '/containers/' + req.params.id + '/json?',
        method: 'GET',
        statusCodes: {
            200: true,
            400: "bad parameter",
            500: "server error"
        }
    };
    dockerModem.dial(request, function(err, data) {
       if (err) {
           return res.json(err);
       }
        else {
           return res.json(data);
       }
    });
});

/**
 * Container top.
 */
dockerapi.get('/containers/:id/top', function(req, res) {
    var request = {
        path: '/containers/' + req.params.id + '/top?',
        method: 'GET',
        statusCodes : {
            200: true,
            404: "no such container",
            500: "server error"
        }
    };
    dockerModem.dial(request, function(err, data) {
       if (err) {
           return res.json(err);
       }
        else {
           return res.json(data);
       }
    });
});

/**
 * Container stats.
 * FIXME
 */
dockerapi.get('/containers/:id/stats', function(req, res) {
   var request = {
       path: '/containers/' + req.params.id + '/stats?',
       method: 'GET',
       isStream : true,
       statusCodes: {
           200: true,
           404: "no such container",
           500: "server error"
       }
   };
    console.log("here !! ");
    dockerModem.dial(request, function(err, data) {
       if (err) {
           console.log("ERROR ! ");
           console.log(err);
           return res.json(err);
       }
        else {
           console.log("SUCCESS ! ");
           console.log(data);
            return res.json(data);
       }
    });
});