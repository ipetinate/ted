const nodemailer = require('nodemailer')

module.exports = (mailOptions) => {
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 1025,
        auth: {
            user: 'project.1',
            pass: 'secret.1'
        }
    })

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) return console.error(error)

            console.log('Message %s sent: %s', info.messageId, info.response)

            return res
        })
    } catch (error) {
        console.error(error)
    }
}
