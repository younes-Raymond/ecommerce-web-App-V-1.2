"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const controls = document.querySelector('.controls');
const cameraOptions = document.querySelector('.video-options>select');
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const screenshotImage = document.querySelector('img');
const buttons = [...controls.querySelectorAll('button')];
let streamStarted = false;
const [play, pause, screenshot] = buttons;
const constraints = {
    video: {
        width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 1440
        },
    }
};
const getCameraSelection = () => __awaiter(void 0, void 0, void 0, function* () {
    const devices = yield navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    const options = videoDevices.map(videoDevice => {
        return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
    });
    cameraOptions.innerHTML = options.join('');
});
play.onclick = () => {
    if (streamStarted) {
        video.play();
        play.classList.add('d-none');
        pause.classList.remove('d-none');
        return;
    }
    const nvmG = navigator.mediaDevices.getUserMedia;
    if ('mediaDevices' in navigator && nvmG) {
        const updatedConstraints = Object.assign(Object.assign({}, constraints), { deviceId: {
                exact: cameraOptions.value
            } });
        startStream(updatedConstraints);
    }
};
const startStream = (constraints) => __awaiter(void 0, void 0, void 0, function* () {
    const stream = yield navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
});
const handleStream = (stream) => {
    video.srcObject = stream;
    play.classList.add('d-none');
    pause.classList.remove('d-none');
    screenshot.classList.remove('d-none');
    streamStarted = true;
};
getCameraSelection();
cameraOptions.onchange = () => {
    const updatedConstraints = Object.assign(Object.assign({}, constraints), { deviceId: {
            exact: cameraOptions.value
        } });
    startStream(updatedConstraints);
};
const pauseStream = () => {
    video.pause();
    play.classList.remove('d-none');
    pause.classList.add('d-none');
};
const doScreenshot = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let cvtxt = canvas.getContext('2d');
    cvtxt.drawImage(video, 0, 0);
    screenshotImage.src = canvas.toDataURL('image/webp');
    screenshotImage.classList.remove('d-none');
};
pause.onclick = pauseStream;
screenshot.onclick = doScreenshot;
const sendScreenshotToServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const screenshotBlob = yield new Promise((resolve) => {
        canvas.toBlob(resolve, 'image/jpeg');
    });
    const formData = new FormData();
    formData.append('screenshot', screenshotBlob, 'screenshot.jpg');
    const response = yield fetch('/upload-screenshot', {
        method: 'POST',
        body: formData,
    });
    if (response.ok) {
        console.log('Screenshot successfully sent to server');
    }
    else {
        console.error('Failed to send screenshot to server');
    }
});
screenshot.addEventListener('click', sendScreenshotToServer);
sendScreenshotToServer();
function validateForm() {
    const form = document.getElementById('form');
    if (!form) {
        return;
    }
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const phoneRegex = /^(?:(?:\+|00)[0-9]{1,3})?[-. (]*[0-9]{3}[-. )]*[0-9]{3}[-. ]*[0-9]{4,6}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!nameRegex.test(name.value)) {
        alert('Please enter a valid full name');
        name.focus();
        return false;
    }
    if (!phoneRegex.test(phone.value)) {
        alert('Please enter a valid phone number in the format XXX-XXX-XXXX');
        phone.focus();
        return false;
    }
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return false;
    }
    return true;
}
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
    else if (validateForm()) {
    }
});
