'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('node_modules'));
app.use('/', express.static('app'));

var port = 9090;

app.listen(port, function () {
        console.log("Server listening on port " + port);
});