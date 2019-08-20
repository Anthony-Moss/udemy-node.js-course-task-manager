const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

sgMail.send({
    to: 'asmoss93@gmail.com',
    from: 'asmoss93@gmail.com',
    subject: 'This is my example email',
    text: 'I hope this works!'
})

