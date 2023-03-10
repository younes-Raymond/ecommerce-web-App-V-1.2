"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let body = document.querySelector("body");
document.getElementById("name").oninput = () => {
    document.getElementById("svgname").innerHTML = document.getElementById("name").value;
};
document.getElementById("cardnumber").oninput = () => {
    document.getElementById("svgnumber").innerHTML = document.getElementById("cardnumber").value;
};
document.getElementById("expirationdate").oninput = () => {
    document.getElementById("svgexpire").innerHTML = document.getElementById("expirationdate").value;
};
document.getElementById("securitycode").onmouseenter = () => {
    document.querySelector(".front").style.transform = 'rotateY(-180deg)';
    document.querySelector(".back").style.transform = 'rotateY(0deg)';
};
document.getElementById("securitycode").onmouseleave = () => {
    document.querySelector(".front").style.transform = 'rotateY(0deg)';
    document.querySelector(".back").style.transform = 'rotateY(180deg)';
};
document.getElementById("securitycode").oninput = () => {
    document.getElementById("svgsecurity").innerHTML = document.getElementById("securitycode").value;
};
const username = document.getElementById('name');
const cardnumberR = document.getElementById('cardnumber');
const expiration = document.getElementById('expirationdate');
const securitycode = document.getElementById('securitycode');
document.forms[0].onsubmit = function (e) {
    let name = false;
    let cardnumber = false;
    let expirationNumber = false;
    let securityCod = false;
    if (username.value !== "" && username.value.length <= 10) {
        name = true;
    }
    if (cardnumberR.value !== "" && cardnumberR.value.length <= 20) {
        cardnumber = true;
    }
    if (expiration.value !== "" && expiration.value.length <= 5) {
        expirationNumber = true;
    }
    if (securitycode.value !== "" && securitycode.value.length >= 3) {
        securityCod = true;
    }
    if (name === false || cardnumber === false || expirationNumber === false || securityCod === false) {
        window.getComputedStyle(body);
        body.style.setProperty('--afterBack', 'linear-gradient(0deg,#e53a3a,transparent,#e53a3a');
        e.preventDefault();
    }
    if (name === true && cardnumber === true && expirationNumber === true && securityCod === true) {
        window.getComputedStyle(body);
        body.style.setProperty('--afterBack', 'linear-gradient(0deg,#66dc62,transparent,#66dc62');
    }
};
