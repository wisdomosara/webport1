var express = require('express'),
nodemailer = require("nodemailer");

app = express.createServer();

app.use(express.bodyParser());

app.post('/formProcess', function (req, res) {
    var data=req.body;

    var smtpTransport = nodemailer.createTransport("SMTP",{
       service: "Gmail", 
       auth: {
       user: "wisdomosara@gmail.com",
       pass: "Ikhuoria1996"
       }});

   smtpTransport.sendMail({  //email options
   from: "Sender Name <wisdomosara@gmail.com>",
   to: "Receiver Name <wisdomosara@email.com>", // receiver
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
