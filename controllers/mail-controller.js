const nodemailer = require('nodemailer')

const makeOptions = (req) => {
    const { to, subject } = req.body

    const htmlFile = req.files.html
    const html = htmlFile?.data?.toString('utf8')

    const from = '"TED" <tedtooldev@gmail.com>'

    return { from, to, subject, html }
}

module.exports = (req) => {
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 1025,
        auth: {
            user: 'project.1',
            pass: 'secret.1'
        }
    })

    try {
        transporter.sendMail(makeOptions(req), (error, info) => {
            if (error) return console.error(error)

            console.log('Message %s sent: %s', info.messageId, info.response)

            return res
        })
    } catch (error) {
        console.error(error)
    }
}
