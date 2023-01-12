
const express = require('express');
const upload = require('express-fileupload');
const router = express.Router();
const passport = require('passport');
const nodemailer = require('nodemailer');
const https = require('https');
const FacebookStrategy = require('passport-facebook').Strategy;
const multer = require('multer');
const bodyParser = require('body-parser');
var Datastore = require('nedb');
const fs = require('fs');
const {google} = require('googleapis');
const readline = require('readline');
const app = express(); 
app.use(upload())
const cors = require('cors');
const { error } = require('console');
const { getMaxListeners } = require('process');
const { Server } = require('http');
app.use(cors())
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.json());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+ '/public'));
app.use(express.static(__dirname+ '/views'));
const database = new Datastore('database.db');
database.loadDatabase();
const database2 = new Datastore('database2.db');
database2.loadDatabase();

function sendemailtodelevery () { // 
const nodemailer = require('nodemailer');
// Create a transport object
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raymondyounes2@gmail.com', // my username email 
    pass: 'iqwvmellavcyatyl' // my password email 
  }
});

// Define the email options

let mailOptions = {
  from: '"younes pro" <raymondyounes2@gmail.com>', // my email name 
  to: 'youneshero436@gmail.com', // email of custumer 
  subject: 'fin a3xiri cv',
  html: ``
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
// sendemailtodelevery()



//  passport.use(new FacebookStrategy({
//   clientID: ''
//  }))



// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// passport.use(new GoogleStrategy({
//     clientID:"459871451563-u6902d8b9ppo4lkqo0d3mjv033u3s6bb.apps.googleusercontent.com",
//     clientSecret: "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",
//     callbackURL: "http://localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));




// middleware 
app.set('view engine', 'ejs');
app.get('/', (req,res) => {
  res.render('index')
});
app.get('/login',(req,res) => {
  res.render('login')
})


// save costumer information into database from html5 
app.post('/', (req,res) => {
  console.log("i got a request from files")
 const nameUser = req.body.name;
 const phone = req.body.phone;
 const photo = req.files.photo;
 const userinfo = {
  nameUser:nameUser,
  phone: phone,
  photo: photo,
};

  database2.insert(userinfo, function (err, newDoc) {
    if(err) {
      console.log(err)
      console.log("error paramatre")
      res.status(500).json({
        status: 'error',
        error: 'Error inserting data into database'
      });
    } else if (newDoc) {
      console.log(newDoc)
      res.json({
        status: 'success',
        nameUser:nameUser,
        photo: photo,
        phone: phone,
      });
    }
  });
});

// take secreenshot from canvas and send it into database 
app.post('/upload-screenshot', (req, res) => {
  console.log('i got request from screenshot');
  console.log(req.files)
  const data= req.files.screenshot.data;
  const filename= req.files.screenshot.name;
  const timestamp = Date.now();
  const image = {
    data: data,
    filename: filename,
    timestamp: timestamp,
  };
  database2.insert(image, function (err, newDoc) {
    if(err) {
      console.log(err)
      console.log("error paramatre")
      res.status(500).json({
        status: 'error',
        error: 'Error inserting data into database'
      });
    } else if (newDoc) {
      console.log(newDoc)
      res.json({
        status: 'success',
        timestamp: timestamp,
        photo: data,
        filename:filename,
      });
    }
  });
});

// api from the map.js file  
app.post('/api', (req, res) => {
  console.log(`i got a request from multiple api `);
  const data = req.body;
  const timestamp = Date.now();
  console.log(data)
  data.timestamp = timestamp;
  database.insert(data);
res.json({
  status: 'succcess',
  timestamp: timestamp,
  data: data.lat,
  data: data,lon,
});
app.get('/api', (req,res) => {
  database.find({},(err,data) => {
      res.json(data);
      if (err) {
          res.end();
          return;
      }
  });
});
});

app.use('/', function (req,res){
  res.sendFile(__dirname +  '/public/index.html');
});

app.use('/', function (req,res){
  res.sendFile(__dirname +  '/public/index2.html');
});

app.use('/', function (req,res){
  res.sendFile(__dirname +  '/public/index3.html');
});

 


//app.post('/upload-screenshot', (req,res)=> {
  //   console.log('i got request from seconde screenshot');
  //   const data = req.files.screenshot.data;
  // //  const timestamp = Date.now();
  // //  data.timestamp = timestamp;
  // //   if(req.files) {
  //    var file = req.files.screenshot
  //    var filename = file.name
  //     file.mv('./upload/'+ filename, function (err) {
  //        if(err){
  //          res.send(err)
  //        } else {
  //          res.send("file uploaded")
  //        }
  //      })
  //   })
  
// end api componont
