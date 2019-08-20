const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anthonymoss.dev@gmail.com',
        subject: 'Welcome! Thanks for joining!',
        text: `Welcome to my task app, ${name}. Let me know how you get along with the app. `
    })
}


module.exports = { 
    sendWelcomeEmail
}