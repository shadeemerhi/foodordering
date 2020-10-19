const express = require('express');
const router = express.Router();
// Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = () => {
  router.post("/", (req, res) => {


    client.messages.create({

      body: 'You have received an order',
      from: '+15712003029',
      to: '+14036305730'
    }).then(message => console.log(message.sid));

    setTimeout(() => {
      client.messages.create({

        body: 'come pick up your food',
        from: '+15712003029',
        to: '+12369911010'
      }).then(message => console.log(message.sid));
    }, 5000);


    res.send('we are in twilio');

  });

  return router;
};
