const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anthonymoss.dev@gmail.com',
        subject: 'Welcome! Thanks for joining!',
        text: `Welcome to my task app, ${name}. Let me know how you get along with the app. `
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'anthonymoss.dev@gmail.com',
        subject: "Sorry to see you leave!",
        text: `${name}, we are sad to see you leave! If you have any suggestions on how we could have done better we would love to hear them!`
    })
}

module.exports = { 
    sendWelcomeEmail,
    sendCancelationEmail
}