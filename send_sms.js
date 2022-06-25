require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;



const client = require('twilio')(accountSid, authToken);




client.messages
    .create({
        body: `BING BONG FUCK YA LIFE`,
        from: '+17067803759',
        to: '+13035489271'
    })
    .then(message => console.log(message.sid))
    .catch((err) => console.error(err))


    /// npm i dotenv