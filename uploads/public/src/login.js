
let userinput = document.querySelector("[name='username']");
let password = document.querySelector("[name='password']")
let form = document.querySelector("form")
let box = document.getElementById("idbox");

document.forms[0].onsubmit = function (e) {
    let uservalid = false;
    let passwordvalid = false;
    if (userinput.value !== "" &&  userinput.value.length <= 20 ) {
        uservalid = true
    }
    if (password.value !== "" && password.value.length >= 8) {
        passwordvalid = true
    }
    
    if (uservalid === false || passwordvalid === false) {
        
        let before = window.getComputedStyle(box,'::before')
        box.style.setProperty('--afterBack','linear-gradient(0deg,transparent,#e53a3a,#e53a3a')
    
        let after = window.getComputedStyle(box,'::after')
        box.style.setProperty('--afterBack','linear-gradient(0deg,transparent,#e53a3a,#e53a3a')
        e.preventDefault();
    }
    if (uservalid === true && passwordvalid === true) {
    let before = window.getComputedStyle(box,'::before')
    box.style.setProperty('--afterBack','linear-gradient(0deg,transparent,#66dc62,#66dc62')

    let after = window.getComputedStyle(box,'::after')
    box.style.setProperty('--afterBack','linear-gradient(0deg,transparent,#66dc62,#66dc62')

    }
}







