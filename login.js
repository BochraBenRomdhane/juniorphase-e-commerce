const name = document.getElementById("Full-name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const confirm = document.getElementById("confirmpass")
const submit = document.querySelector("#btn")
const error = document.querySelector("#error-message")


submit.addEventListener("click", function (event) {
    event.preventDefault()
    if (name.value === "" && email.value === "" && confirm.value === "" && pass.value === "") {
        error.innerHTML = "required"
    }
    else if (!Checkname(name.value)) {
        error.innerHTML = "Enter a valid name !!"
    } else if (!email.value.includes("@gmail.com")) {
        error.innerHTML = "Enter a valid email !!"
    } else if (pass.value !== confirm.value
        || !checksumb(pass.value)
        || !checkUpper(pass.value)
        || !checklower(pass.value)
        || !checknumb(pass.value)) {
        error.innerHTML = "Password must match and include at least one uppercase letter, one lowercase letter, one number, and one special character !!"
    } else {
        window.location.href = "Home.html";
    }
})

function Checkname(name) {
    for (var i = 0; i < name.length; i++) {
        if (name.length > 5 && /[A-Z]/.test(name[0])) {
            return true
        } else {
            return false
        }
    }
}


function checksumb(pass) {
    var str = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var c = 0
    for (var i = 0; i < pass.length; i++) {
        if (str.includes(pass[i])) {
            c = c + 1
        }
    }
    if (c >= 1) {
        return true
    } else {
        return false
    }
}
function checklower(pass) {
    var str = "azertyuiopqsdfghjklmwxcvbn"
    var c = 0
    for (var i = 0; i < pass.length; i++) {
        if (str.includes(pass[i])) {
            c = c + 1
        }
    }
    if (c >= 1) {
        return true
    } else {
        return false
    }
}
function checknumb(pass) {
    var str = "1234567890"
    var c = 0
    for (var i = 0; i < pass.length; i++) {
        if (str.includes(pass[i])) {
            c = c + 1
        }
    }
    if (c >= 1) {
        return true
    } else {
        return false
    }
}
function checkUpper(pass) {
    var str = "azertyuiopqsdfghjklmwxcvbn".toUpperCase()
    var c = 0
    for (var i = 0; i < pass.length; i++) {
        if (str.includes(pass[i])) {
            c = c + 1
        }
    }
    if (c >= 1) {
        return true
    } else {
        return false
    }
}
