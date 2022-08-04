const express = require('express')
const fileUpload = require('express-fileupload')

const mailController = require('./controllers/mail-controller')
const makeEmailData = require('./tools/make-email-data')

const PORT = 5050
const app = express()

app.use(fileUpload({ debug: true }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`🌐 Server listening on port ${PORT}: http://localhost:${PORT}`)
})

app.post('/form', (req, res) => {
    try {
        mailController(req)

        return res.redirect('/')
    } catch (error) {
        return res.sendFile('/public/error.html')
    }
})
