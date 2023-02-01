
const express = require('express');
const upload = require('express-fileupload');
const router = express.Router();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
// const compiler = webpack(webpackConfig);
const passport = require('passport');
// const nodemailer = require('nodemailer');
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
app.use(express.json());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+ '/public'));
app.use(express.static(__dirname+ '/views'));
const database = new Datastore('database.db');
database.loadDatabase();
const database2 = new Datastore('database2.db');
database2.loadDatabase();
const database3 = new Datastore('database3.db');
database3.loadDatabase();
// middlware 
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('Home')
});
app.get('/Home', (req,res) => {
  res.render('Home')
});

app.get('/index', (req,res) => {
  res.render('index')
});
app.get('/main-login', (req,res) => {
  res.render('main-login')
});
app.get('/Men', (req,res) => {
  res.render('Men')
});
app.get('/map', (req,res) => {
  res.render('map')
});
app.get('/payment-card', (req,res) => {
  res.render('payment-card')
});
app.get('/contact-us', (req,res) => {
  res.render('contact-us')
});
app.get('/women', (req,res) => {
  res.render('women')
});
app.get('/confirmphoto', (req,res) => {
  res.render('confirmphoto')
});
app.get('/main-login', (req,res) => {
  res.render('main-login')
});
app.get('/about-us', (req,res) => {
  res.render('about-us')
});




app.listen(3000, () => console.log('listening at 3000'));



const sendEmailToDelivery = (currentUserEmail, deliveryEmail) => {
  database3.find({ email: currentUserEmail }, (err, docs) => {
      if (err) throw err;
      const currentUser = docs[0];
      // const email = currentUserEmail
    
      // Create a transport object
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'raymondyounes2@gmail.com', // my username email 
              pass: 'iqwvmellavcyatyl' // my password email secure  
          }
      });
     
      // Define the email options
      let mailOptions = {
        from: '"Sneakers" <raymondyounes2@gmail.com>', 
        to: deliveryEmail,
        subject: 'Sneakers Delivery Information',
        html: `<!DOCTYPE html>
        <html>
        <head>
        <title>Delivery Information</title>
        </head>
        <body>
        <h1 style="color: #5e9ca0; text-align: center;">Delivery Information</h1>
        <p style="text-align: center;">Dear Delivery Person,</p>
        <p style="text-align: center;">Please find the following information for a recent purchase made by ${currentUser.nameUser}.</p>
        <p style="text-align: center;">The customer's contact information is as follows:</p>
        <p style="text-align: center;">Name: ${currentUser.nameUser}</p>
        <p style="text-align: center;">Phone: ${currentUser.phone}</p>
        <p style="text-align: center;">Email: ${currentUser.email}</p>
        <p style="text-align: center;">picture: ${currentUser.location}</p>
        <p style="text-align: center;">picture: ${currentUser.picture}</p>
        <p style="text-align: center;">Please process and ship the order as soon as possible.</p>
        <p style="text-align: center;">Thank you for your prompt attention to this matter.</p>
        <p style="text-align: center;">Sincerely,</p>
        <p style="text-align: center;">The younes pro Team</p>
        </body>
        </html>
        `
    };
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
          } else {
              console.log('Email sent: ' + info.response);
          }
      });
  });
}
const deliveryEmailOne = 'youneshero436@gmail.com';
const deliveryEmailTwo = 'anotherdeleceryGuy@gmail.com';
const confirmationGUY = 'confirmguy@gmail.com'
// sendEmailToDelivery('raymondyounes2@gmail.com',deliveryEmailOne,deliveryEmailTwo); // email of customer, email of delivery guy

// middleware 


// save costumer information into database from html5 
app.post('/', (req,res) => {
  console.log("i got a request from files")
 const nameUser = req.body.name;
 const phone = req.body.phone;
 const photo = req.files.photo;
 const email = req.body.email;
 const userinfo = {
  nameUser:nameUser,
  phone: phone,
  email:email,
  photo: photo,
};
console.log(userinfo)

  database3.insert(userinfo, function (err, newDoc) {
    if(err) {
      console.log(err)
      console.log("error paramatre")
      res.status(500).json({
        status: 'error',
        error: 'Error inserting data into database'
      });
    } else if (newDoc) {
      // console.log(newDoc)
      res.json({
        status: 'success',
        nameUser:nameUser,
        photo: photo,
        phone: phone,
        location: data.lat,
        location: data.lon,
        email:email,
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
      // console.log(newDoc)
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
  console.log(data);
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

// app.use(require('webpack-dev-middleware')(compiler,{
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));


 


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
