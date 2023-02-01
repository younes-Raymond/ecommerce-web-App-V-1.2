
// const body = document.getElementsByTagName("body") as HTMLBodyElement;
// const body = document.getElementsByTagName("body");
const yes = document.getElementById("yes") as HTMLDivElement;
const no = document.getElementById("no") as HTMLDivElement;
const confirm_BTN = document.getElementById("confirm_BTN")as HTMLButtonElement;

yes.onclick = () => {
  yes.classList.add("active")
  no.classList.remove("active")
}
no.onclick = () => {
  no.classList.add("active")
  yes.classList.remove("active")
}



window.onload = () => {
  yes.classList.add("active")
}
confirm_BTN.onclick = (e) => {
  if(no.classList.contains("active")) {
    alert("dont send datra ")
  } else if (yes.classList.contains("active")) {
  const agree = prompt("do you want to confirm order (s) with picture","yes");
    if(agree === "yes") {
      window.location.href = "confirmphoto";
  }else{
    window.location.href = "Home"
}
}
}


// drawing maps into canvas  with leaflet.js
const mymap = L.map('issmap').setView([0, 0], 1);
const attribution = 
'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL,{attribution});
tiles.addTo(mymap);


// making a marker with a custom icon 
const issicon = L.icon({
  iconUrl:'images/location.png',
  iconSize: [50,32],
  iconAnchor: [25,16]
});

const marker = L.marker([0,0],{icon:issicon}).addTo(mymap);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
  
let confirmClicked:boolean = false;

  // set this function every 1seconde
  // window.setInterval('TrackingGeoLo()',1000);
  confirm_BTN.addEventListener('click',() => {
    confirmClicked = true
  });

window.setInterval(()=> {
if ('geolocation' in navigator) {
console.log("geolocation is avilable")
navigator.geolocation.getCurrentPosition(async position => {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const data = {lat,lon};
if(confirmClicked = true){
const options = {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
}
fetch('/api', options);
} else{
  return confirmClicked = false;
}
marker.setLatLng([lat,lon])
mymap.setView([lat,lon],15)
});
} else {
alert("please give us the premession from setting up and try again ");
}
}, 1000)





  


