const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));
const CLIENT_ID = '1087829292031-6u8366eivulj3pa20rbn0c45m31r7at4.apps.googleusercontent.com';
const CLIENT_SECRET = 'DNLNvBTUy-XVcCUBdP0-NWje';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
	'1//04Bk0fUEkF7NVCgYIARAAGAQSNwF-L9IrehntXGGogsAegwE5GOeDutsZMjmJGLug2pQwjIvUNLiiLDv6Sy3T0HgjEBjDl8WfWLw';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

			const accessToken = oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                  type: 'OAuth2',
                  user: 'willie@dkdlogistics.com',
                  refreshToken: '1//04Bk0fUEkF7NVCgYIARAAGAQSNwF-L9IrehntXGGogsAegwE5GOeDutsZMjmJGLug2pQwjIvUNLiiLDv6Sy3T0HgjEBjDl8WfWLw',
                  accessToken: accessToken,
                  clientId: CLIENT_ID,
                  clientSecret: CLIENT_SECRET
                }
              })
              
              const send = ({ email, name, text }) => {
                const from = name && email ? `${name} <${email}>` : `${name || email}`
                const message = {
                  from,
                  to: 'willie@dkdlogistics.com',
                  subject: `New message from ${from}`,
                  text,
                  replyTo: from
                }
              
                return new Promise((resolve, reject) => {
                  transporter.sendMail(message, (error, info) =>
                    error ? reject(error) : resolve(info)
                  )
                })
              }
              
              
              module.exports = send
