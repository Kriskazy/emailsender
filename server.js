const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const {
  port,
  user,
  pass,
  clientId,
  clientSecret,
  refreshToken,
} = require("./config");

// Mail transporter object
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// Email details
let mailDetails = {
  from: user,
  to: "donkris93@gmail.com",
  subject: "Nodemailer Test mail",
  text: "Nodemailer is working fine, nice one",
};

// Send email function
transporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log("An Error Occured");
  } else {
    console.log("Email sent successfully");
  }
});

app.listen(port, () => {
  console.log(`Nodemailer Server is running on port ${port}`);
});
