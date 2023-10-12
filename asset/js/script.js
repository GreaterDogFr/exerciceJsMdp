//todo: faire des progress bar avant de push sur github

let info = document.getElementById("info")
let btnChange = document.getElementById("changement")
let newPass = document.getElementById("newPass")
let confirmPass = document.getElementById("confirmPass")
let newPassShow = document.getElementById("newPassShow")
let confirmPassShow = document.getElementById("confirmPassShow")
let passStrengthAlert = document.getElementById("passStrengthAlert")
let passStrengthState = document.getElementById("passStrengthState")

let progressBar = document.getElementById("progress-bar")

const checkMinChar = /.{8,}/;
const checkMixedCase = /(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/;
const checkSpecialChar = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/;

btnChange.addEventListener('click', function () {
    let strengthLevel = 0
    info.classList.remove('success', 'danger')
    let inputNewPass = newPass.value
    let inputConfirmPass = confirmPass.value
    if (inputNewPass === inputConfirmPass) {
        info.classList.add('success')
        info.innerText = "Nouveau mot de passe confirmé."

        // ! check for pass strength

        if (checkSpecialChar.test(inputNewPass) == false) {
            passStrengthAlert.innerHTML = "Aucun charactère spécial."
        } else {
            strengthLevel += 1
        }

        if (checkMixedCase.test(inputNewPass) == false) {
            passStrengthAlert.insertAdjacentHTML("beforeend", " Seulement des Majuscules ou Minuscules.")
        } else {
            strengthLevel += 1
        }

        if (checkMinChar.test(inputNewPass) == false) {
            passStrengthAlert.insertAdjacentHTML("beforeend", "Minimum 8 char")
        }
        else {
            strengthLevel += 1
        }
        console.log(strengthLevel)
        switch (strengthLevel) {
            case 0:
                passStrengthState.innerHTML = "Faible"
                progressBar.style.width = "25%"
                break;
            case 1:
                passStrengthState.innerHTML = "Moyen"
                progressBar.style.width = "50%"
                break;
            case 2:
                passStrengthState.innerHTML = "Fort"
                progressBar.style.width = "75%"
                break;
            case 3:
                passStrengthState.innerHTML = "Très fort"
                progressBar.style.width = "100%"
                break;
        }
        // ! pass strength checked

    } else {
        info.classList.add('danger')
        info.innerText = "Mot de passe différents. Veuillez réessayer."
    }
})


newPassShow.addEventListener('mousedown', function () {
    newPass.type = "text"
})

newPassShow.addEventListener('mouseup', function () {
    newPass.type = "password"
})

confirmPassShow.addEventListener('mousedown', function () {
    confirmPass.type = "text"
})

confirmPassShow.addEventListener('mouseup', function () {
    confirmPass.type = "password"
})