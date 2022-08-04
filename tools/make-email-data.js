module.exports = (req) => {
    const { to, subject } = req.body

    const htmlFile = req.files.html
    const html = htmlFile?.data?.toString('utf8')

    const from = '"TED" <tedtooldev@gmail.com>'

    return { from, to, subject, html }
}
