"use strict";

// server.js
var express = require('express');

var next = require('next');

var bodyParser = require('body-parser');

var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();

var mailer = require('./mailer');

app.prepare().then(function () {
  var server = express();
  server.use(bodyParser.json());
  server.post('/contact', function (req, res) {
    var _req$body = req.body,
        _req$body$email = _req$body.email,
        email = _req$body$email === void 0 ? '' : _req$body$email,
        _req$body$name = _req$body.name,
        name = _req$body$name === void 0 ? '' : _req$body$name,
        _req$body$message = _req$body.message,
        message = _req$body$message === void 0 ? '' : _req$body$message;
    mailer({
      email: email,
      name: name,
      text: message
    }).then(function () {
      console.log('success');
      res.send('success');
    })["catch"](function (error) {
      console.log('failed', error);
      res.send('badddd');
    });
  });
  server.get('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(3000, function (err) {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});