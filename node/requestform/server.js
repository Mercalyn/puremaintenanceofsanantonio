// import
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 8080;


//nodemailer func
async function mailThis( message ) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    // this info can be used from the cpanel smtp server and the hostings info site(godaddy, inmotion, namecheap)
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587, //default
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Request Form" <admin@puremoldsolution.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Request Form from ' + message.name, // Subject line
        text: 
            'Name: ' + message.name + '\n' +
            'Email: ' + message.email + '\n' +
            'Phone: ' + message.phone + '\n\n' +
            'Message: \n' + message.message + '\n\n' +
            'This is a Server email - do NOT reply to this message',
        html:
            '<b style="color:green;">Name: </b>' + message.name + '<br />' +
            '<b style="color:green;">Email: </b>' + message.email + '<br />' +
            '<b style="color:green;">Phone: </b>' + message.phone + '<br /><br />' +
            '<b style="color:green;">Message: </b><br /><p>' + message.message + '</p><br /><br />' +
            '<b style="color:red;">This is a Server email - do NOT reply to this message</b>',

    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};



// support json encoded bodies
app.use(bodyParser.json()); 

// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

// routes will go here
// POST http://localhost:8080/node/requestform/server
// parameters sent with 
app.post('/node/requestform/server', function(req, res) {
    let message = {
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message
    };

    //nodemailer goes here
    console.log(message);
    mailThis( message ).catch(console.error);
    

    //response is true
    res.send(true);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);