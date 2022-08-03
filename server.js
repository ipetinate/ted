const express = require("express");
const nodeMailer = require("nodemailer");
const fileupload = require("express-fileupload");

const PORT = 5000;
const app = express();

app.use(fileupload());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`🌐 Server listening on port ${PORT}: http://localhost:${PORT}`);
});

app.post("/form", (req, res) => {
  const { to, html, subject } = req.body;
  const from = '"TED" <tedtooldev@gmail.com>';

  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "tedtooldev@gmail.com",
      pass: "t3dT0000l",
    },
  });

  let mailOptions = { from, to, subject, html };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) return console.error(error);

      console.log("Message %s sent: %s", info.messageId, info.response);

      return res;
    });
  } catch (error) {
    console.error(error);
  }
});
