
const express = require('express');
const upload = require('express-fileupload');
// const compiler = webpack(webpackConfig);
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var Datastore = require('nedb');
const {google} = require('googleapis');
const app = express(); 
app.use(upload())
const cors = require('cors');
const { error, info } = require('console');
const { getMaxListeners } = require('process');
const { Server } = require('http');
const { resolve } = require('path');
const { errorMonitor } = require('events');
const { copyFile } = require('fs');
app.use(cors())
app.use(express.json());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+ '/public'));
app.use(express.static(__dirname+ '/views'));
const position = new Datastore('position.db');
position.loadDatabase();
const database2 = new Datastore('database2.db');
database2.loadDatabase();
const infoUser = new Datastore('infoUser.db');
infoUser.loadDatabase();
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));



// save costumer information into database from html5 
app.post('/', (req,res) => {
  console.log("i got a request from files")
 const nameUser = req.body.name;
 const phone = req.body.phone;
//  const photo = req.files.photo;
 const email = req.body.email;
 const userinfo = {
  nameUser:nameUser,
  phone: phone,
  email:email,
  // photo: photo,
};
console.log(userinfo)

  database2.insert(userinfo, function (err, newDoc) {
    if(err) {
      console.log(err)
      console.log("error paramatre")
      res.status(500).json({
        status: 'error',
        error: 'Error inserting data into database'
      });
      // this is theend point and the insert , method how i was create it you can modify it to make it save data as we excpect in our sendemail func

      console.log(req.body)
      console.log(req.file)
    } else if (newDoc || req.file.photo === undefined) {
      res.json({
        status: 'success',
        nameUser:nameUser,
        // photo: photo,
        phone: phone,
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
  position.insert(data, (err, newDoc) => {
    if(err) {
      console.log(err);
      res.status(500).json({
        status:'error',
        message:'Failed to insert data into the database',
      });

    } else {
      console.log('inserted data into the database ', newDoc);
      res.json({
        status:'success',
        timestamp:timestamp,
        data:newDoc,
      });
    }
  });
})

const getdata = (req,res) => {
database2.find({}, (err,docs) => {
console.log(err);
if(docs){
  console.log(docs[2]); 
}
})
}
// getdata()



const sendEmailToDelivery = async (currentUserEmail, deliveryEmail) => {
 

  const getLocation = () => {
     return new Promise((resolve, reject) => {
      position.find({}, (err, docs) => {
        if (err) reject(err);
        location = docs[0];
        resolve(location)
        return
        // console.log(`the block scope location  ${location.lat + " // " + location.lon} `)
        });
    })
  }
  // getLocation()
 
 const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
    database2.find({}, (err, docs) => {
      if (err) reject(err);
      if (docs[0].length === 0) {
        reject('no user found')
      } else if (docs[0].length <= 0) {
        console.log('no data found')
      }
      currentUser = docs;
      resolve(currentUser)
      // console.log(currentUser)
      return currentUser
      // console.log(`the block-scope log ${currentUser.nameUser}`); // this line is 
  })
 })
 }
 
Promise.all([getCurrentUser(),getLocation()])
.then((value) => {
  var location;
  var currentUser;
  location = value[1]
  console.log(location.lon);
  console.log(location.lat);
  currentUser = value[0];
  let userData = currentUser[2]
  console.log(userData)

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "raymondyounes2@gmail.com",
    pass:"iqwvmellavcyatyl"
  }
});
          ////////////////////////////////////////////////////
            
          let mailOptions = {
            from: '"Sneakers" <raymondyounes2@gmail.com>', 
            to: deliveryEmail,
            subject: 'Sneakers Delivery Information',
            html: `<!DOCTYPE html>
            <html>
            <head>
            </head>
            <body>
            <h1 style="color: #5e9ca0; text-align: center;">Delivery Information</h1>
            <p style="text-align: center;">Dear Delivery Person,</p>
            <p style="text-align: center;">Please find the following information for a recent purchase made by ${userData.nameUser}.</p>
            <p style="text-align: center;">Name: ${userData.nameUser}</p>
            <p style="text-align: center;">Phone: ${userData.phone}</p>
            <p style="text-align: center;">Email: ${userData.email}</p>
            <p style="text-align: center;"> picture: ${'Test currentUser.photo'}</p>
            <p style="text-align: center;">The customer's delivery location is as follows:</p>
            <p style="text-align: center;">Please process and ship the order as soon as possible.</p>
            <p style="text-align: center;">Thank you for your prompt attention to this matter.</p>
            <p style="text-align: center;">Sincerely,</p>
            <p style="text-align: center;">The younes pro Team</p>
            <br><br>
            <a href="https://maps.google.com/?q=${location.lat},${location.lon}" target="_blank">
            <button>View on Google Maps</button>
            </a>
            </body>
            </html>`
        };

  transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
        });
      })
  }

  // const deliveryEmailTwo = 'ysexstin@gmail.com';
  // const confirmationGUY = 'confirmguy@gmail.co'
  const deliveryEmailOne = 'youneshero436@gmail.com';

  sendEmailToDelivery('raymondyounes2@gmail.com',deliveryEmailOne); // email of customer, email of delivery guy

