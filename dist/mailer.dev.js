"use strict";

var express = require('express');

var router = express.Router();

var cors = require('cors');

var app = express();

var nodemailer = require('nodemailer');

var _require = require('googleapis'),
    google = _require.google;

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, function () {
  return console.log('Server Running');
});
var CLIENT_ID = '1087829292031-6u8366eivulj3pa20rbn0c45m31r7at4.apps.googleusercontent.com';
var CLIENT_SECRET = 'DNLNvBTUy-XVcCUBdP0-NWje';
var REDIRECT_URI = 'https://developers.google.com/oauthplayground';
var REFRESH_TOKEN = '1//04Bk0fUEkF7NVCgYIARAAGAQSNwF-L9IrehntXGGogsAegwE5GOeDutsZMjmJGLug2pQwjIvUNLiiLDv6Sy3T0HgjEBjDl8WfWLw';
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
});
var accessToken = oAuth2Client.getAccessToken();
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'willie@dkdlogistics.com',
    refreshToken: '1//04Bk0fUEkF7NVCgYIARAAGAQSNwF-L9IrehntXGGogsAegwE5GOeDutsZMjmJGLug2pQwjIvUNLiiLDv6Sy3T0HgjEBjDl8WfWLw',
    accessToken: accessToken,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET
  }
});

var send = function send(_ref) {
  var email = _ref.email,
      name = _ref.name,
      text = _ref.text;
  var from = name && email ? "".concat(name, " <").concat(email, ">") : "".concat(name || email);
  var message = {
    from: from,
    to: 'willie@dkdlogistics.com',
    subject: "New message from ".concat(from),
    text: text,
    replyTo: from
  };
  return new Promise(function (resolve, reject) {
    transporter.sendMail(message, function (error, info) {
      return error ? reject(error) : resolve(info);
    });
  });
};

module.exports = send;