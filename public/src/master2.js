
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

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter(device => device.kind === 'videoinput');
  const options = videoDevices.map(videoDevice => {
    return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
  });
  cameraOptions.innerHTML = options.join('');
};

play.onclick = () => {
  if (streamStarted) {
    video.play();
    play.classList.add('d-none');
    pause.classList.remove('d-none');
    return;
  }
  
  if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
    const updatedConstraints = {
      ...constraints,
      deviceId: {
        exact: cameraOptions.value
      }
    };
    startStream(updatedConstraints);
  }
};

const startStream = async (constraints) => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleStream(stream);
};

const handleStream = (stream) => {
  video.srcObject = stream;
  play.classList.add('d-none');
  pause.classList.remove('d-none');
  screenshot.classList.remove('d-none');
  streamStarted = true;
};

getCameraSelection();


cameraOptions.onchange = () => {
  const updatedConstraints = {
    ...constraints,
    deviceId: {
      exact: cameraOptions.value
    }
  };
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
  canvas.getContext('2d').drawImage(video, 0, 0);
  screenshotImage.src = canvas.toDataURL('image/webp');
  screenshotImage.classList.remove('d-none');
};

pause.onclick = pauseStream;
screenshot.onclick = doScreenshot;
const sendScreenshotToServer = async () => {
  // Get the screenshot image file as a Blob object
  const screenshotBlob = await new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg');
  });

  // Create a new FormData object and append the screenshot image file to it
  const formData = new FormData();
  formData.append('screenshot', screenshotBlob, 'screenshot.jpg');

  // Send the FormData object to the server using an HTTP POST request
  const response = await fetch('/upload-screenshot', {
    method: 'POST',
    body: formData,
  });

  // Process the server's response
  if (response.ok) {
    console.log('Screenshot successfully sent to server');
    // window = location.href = "thank.html"
  } else {
    console.error('Failed to send screenshot to server');
  }
};

// Add a click event listener to the screenshot button that sends the screenshot to the server
screenshot.addEventListener('click', sendScreenshotToServer);

sendScreenshotToServer()

function validateForm() {
  // Get the form element
  const form = document.getElementById('form');
  if (!form) {
    return;
  }

  // Get the full name and phone number input fields
  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  // const name = form.elements.name;
  // const phone = form.elements.phone;

  // Define regex patterns for the full name and phone number
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const phoneRegex = /^(?:(?:\+|00)[0-9]{1,3})?[-. (]*[0-9]{3}[-. )]*[0-9]{3}[-. ]*[0-9]{4,6}$/; // this can handle with all kind of number in the world

  // const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // is for specify number in u

  // Validate the full name
  if (!nameRegex.test(name.value)) {
    alert('Please enter a valid full name');
    name.focus();
    return false;
  }

  // Validate the phone number
  if (!phoneRegex.test(phone.value)) {
    alert('Please enter a valid phone number in the format XXX-XXX-XXXX');
    phone.focus();
    return false;
  }

  // If the input is valid, return true
  return true;
}

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  } else if (validateForm()) {
    window.location.href = "index.html";
  }
});
