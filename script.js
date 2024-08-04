const passwordInput = document.querySelector("#pswd");
const copypswd = document.querySelector("#copy");
const pswdlength = document.querySelector(".len");
const sliderNumber = document.querySelector(".len-number");
const btn = document.querySelector(".btn-1");

const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const splChar = '!@#$%^&*()_+{}:"<>?./;,[]|\\~=-';
const numbers = '0123456789';

function randomChar(characters) {
    let index = Math.floor(Math.random() * characters.length);
    return characters[index];
}

pswdlength.addEventListener("input", () => {
    sliderNumber.innerHTML = pswdlength.value;
});

function generatePassword(passwordLength) {
    let pswd = '';
    pswd += randomChar(lowercaseChar);
    pswd += randomChar(uppercaseChar);
    pswd += randomChar(splChar);
    pswd += randomChar(numbers);

    const allChar = lowercaseChar + uppercaseChar + splChar + numbers;
    for (let i = pswd.length; i < passwordLength; i++) {
        pswd += randomChar(allChar);
    }

    return pswd;
}

btn.addEventListener('click', () => {
    const passwordLen = parseInt(pswdlength.value, 10);
    const newPassword = generatePassword(passwordLen);
    passwordInput.value = newPassword;
});

copypswd.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    alert("Password Copied");
    return;
  });