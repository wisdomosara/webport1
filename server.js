require('dotenv').config()
const express = require('express');
const log = console.log;
const app = express();
const PORT = process.env.PORT
const nodemailer = require("nodemailer");


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("views"))


  
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/', function(req,res) {
    const name =  req.body.name
    log(req.body)
    
    const mailgun = require("mailgun-js");
    const DOMAIN = process.env.DOMAIN;
    const mg = mailgun({apiKey: process.env.APIKEY, domain: DOMAIN});
    const data = {
        from: req.body.email,
        to: "wisdomosara1@gmail.com",
        subject: req.body.subject,
        text: req.body.message
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });

    // let transport = nodemailer.createTransport({
    //     host: 'smtp.mailtrap.io',
    //     port: 2525,
    //     auth: {
    //        user: 'bb56150d54e55b',
    //        pass: 'a485e03d0e24d9'
    //     }
    // });

    // const message = {
    //     from: req.body.email,
    //     to: "wisdomosara@gmail.com",
    //     subject: req.body.subject,
    //     text: req.body.message,
    // };
    // transport.sendMail(message, function(err, info) {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       console.log(info);
    //     }
    // });
    res.json({response: "Thanks for reaching out to me " + name})
})


app.listen(PORT || 3000, () => log('Server is starting on ' + 3000));