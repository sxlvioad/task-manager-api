const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email, name)=>{
    sgMail.send({
        to: email,
        from: 'tattotg@gmail.com',
        subject:'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail=(email, name)=>{
    sgMail.send({
        to: email,
        from: 'tattotg@gmail.com',
        subject:'Cancelation account confirmation',
        text: `Goodbye ${name}. Let me know why you decided to cancel yout account.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail

}