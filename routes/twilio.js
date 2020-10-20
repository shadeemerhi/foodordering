const express = require('express');
const router = express.Router();
// Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const { getOrderMessage, getOrderTotal } = require('./helpers');

module.exports = () => {
  router.post("/", (req, res) => {

    console.log('We are in the Twilio endpoint for the first message');

    const orderData = req.body;
    const orderMessage = getOrderMessage(orderData);
    const orderTotal = getOrderTotal(orderData);

    client.messages.create({

      body: `Order received: ${orderMessage}. Total Amount: ${orderTotal}`,
      from: '+15712003029',
      to: '+14039753519'
    }).then(message => {
      console.log(message.sid);
      console.log('This worked hahaha');
    });

    res.send('we are in twilio');

  });

  router.post("/admin/response", (req, res) => {

    client.messages.create({

      body: `Your order will take this many minutes: $${data.total}`,
      from: '+15712003029',
      to: '+14036305730'
    }).then(message => {
      console.log(message.sid);
      console.log('This worked hahaha');
    });

    res.send('we are in twilio');

  });

  return router;
};
