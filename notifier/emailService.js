
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "riyabansal@gmail.com",
        pass: 'riyabansal',
    },
    secure: true,
});