// config.js for environment variables
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  user: process.env.MAIL_USERNAME,
  pass: process.env.MAIL_PASSWORD,
  clientId: process.env.OAUTH_CLIENTID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  port: process.env.PORT,
};
