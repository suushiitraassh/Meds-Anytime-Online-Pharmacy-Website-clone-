const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
        from : 'Aditya Navrange <adityanavrange13@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transport.sendMail(mailOptions);
}

module.exports = sendEmail;