'use strict';

const express = require('express');
var ip = require("ip");

const PORT = 8888;

const app = express();
app.get('/', function (req, res) {
  res.send('<h1>Hello Gdansk!</h1></br> <h2>This is the ip address of the container:  ' + ip.address() + '</h2>');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
