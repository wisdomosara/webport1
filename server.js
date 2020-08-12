var express = require('express'),
nodemailer = require("nodemailer");

app = express.createServer();

app.use(express.bodyParser());

app.post('/formProcess', function (req, res) {
    var data=req.body;

    var smtpTransport = nodemailer.createTransport("SMTP",{
       service: "Gmail", 
       auth: {
       user: "email@gmail.com",
       pass: "gmailPassword"
       }});

   smtpTransport.sendMail({  //email options
   from: "Sender Name <email@gmail.com>",
   to: "Receiver Name <receiver@email.com>", // receiver
   subject: "Emailing with nodemailer", // subject
   html: "here your data goes" // body (var data which we've declared)
    }, function(error, response){  //callback
         if(error){
           console.log(error);
        }else{
           console.log("Message sent: " + res.message);
       }

   smtpTransport.close(); 
    }); });
