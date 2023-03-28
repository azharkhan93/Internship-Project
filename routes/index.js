const { Router } = require('express');
const router = Router();


const nodemailer = require('nodemailer');
// const bodyparser = require('body-parser')

router.post('/send-email',  (req, res) => {
    console.log(req.body)
    // const { name, email, message, phone, subject } = req.body;

    const { name, email, message, phone } = req.body;


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {

            // user: process.env.EMAIL,
            // pass: process.env.PASSWORD

            user: 'azharkhan.work101@gmail.com',
            pass: 'mygtwdpecckbahyg'
            
           
        }
    });
    const mailOptions =({
        from: 'azharkhan.work101@gmail.com', // sender address,
        to: 'azharkhan.work101@gmail.com',
        subject: 'Website Contact Form',
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
        <p>Subject: ${req.body.subject}</p>`,
    });

    // const mailOptions =({
    //     from: 'azharkhan.work101@gmail.com', // sender address,
    //     to: 'azharkhan.work101@gmail.com',
    //     // subject: subject, 
    //      subject: 'Website Contact Form',
    //     html: `<p>Name: ${name}</p>
    //     <p>Email: ${email}</p>
    //     <p>Phone: ${phone}</p>
    //     <p>Message: ${message}</p>
    //     <p>Subject: ${value}</p>`,
    // });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong');
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).send('Message sent successfully');
        }
    });

    
});

module.exports = router;