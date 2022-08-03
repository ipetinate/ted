// Translations
const translations = {
  pt: {
    title: "TED - Teste seu template de e-mail",
    madeBy: "Feito com 💙 por",
    sendBtn: "Enviar",
    email: "E-mail",
    password: "Senha",
    file: "Arquivo HTML",
  },
  en: {
    title: "TED - Test your email template",
    madeBy: "Made with 💙 by",
    sendBtn: "Send",
    email: "E-mail",
    password: "Password",
    file: "HTML File",
  },
};

// Queries
const title = document.getElementById("title");
const madeBy = document.getElementById("made-by");

const ptLangBtn = document.getElementById("pt-lang");
const enLangBtn = document.getElementById("en-lang");
const sendBtn = document.getElementById("send");

const email = document.getElementById("email");
const password = document.getElementById("password");
const file = document.getElementById("file");

// Variáveis de Estado
let emailState = "";
let passwordState = "";
let fileState = undefined;

//Listeners
ptLangBtn.addEventListener("click", () => changeLang("pt"));
enLangBtn.addEventListener("click", () => changeLang("en"));

email.addEventListener("change", (e) => {
  emailState = e.target.value;
});
password.addEventListener("change", (e) => {
  passwordState = e.target.value;
});
file.addEventListener("change", (e) => {
  fileState = e.target.value;
});

sendBtn.addEventListener("click", sendForm);

// Tools
function changeLang(lang) {
  title.innerText = translations[lang].title;
  madeBy.innerText = translations[lang].madeBy;
  sendBtn.innerText = translations[lang].sendBtn;
  email.innerText = translations[lang].email;
  password.innerText = translations[lang].password;
  file.innerText = translations[lang].file;
}

function sendForm(e) {
  e.preventDefault();

  const fileBuffer = Buffer.from(fileState);

  alert(
    JSON.stringify({
      emailState,
      passwordState,
      fileBuffer,
    })
  );
}
