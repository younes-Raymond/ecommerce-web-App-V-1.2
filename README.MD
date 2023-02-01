
# Ecommerce Webapp
A web application that helps ecommerce companies generate customers by specifying location and drawing it using leaflet.js. Customers can take a picture or upload it, and provide their phone number, full name, and send this information to the delivery guy. The application also sends an email to the customer to confirm the order. The information is saved in a database and can be retrieved by the delivery guy using a canvas that includes a leaflet.js map, showing the location, picture, and phone number.

## Table of Contents
- [Tech/Languages Used](#tech-languages-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)
- [License](#license)
- [Future Features](#future-features)

## Tech/Languages Used
- Node.js
- Express.js
- Nedb
- Nodemailer
- Google API
- Facebook API
- JavaScript, HTML, CSS, EJS
- Bootstrap, Jquery
- Leaflet.js
- Passport.js

## Getting Started
This application requires Node.js and npm to be installed on your computer.

## Installation
1. Clone this repository to your local machine
git clone https://github.com/username/repository.git


2. Install the required dependencies by running the following command inside the project directory


## npm install

3. Create a .env file in the root directory of the project and add the following environment variables:

FB_APP_ID=your_facebook_app_id
FB_APP_SECRET=your_facebook_app_secret
FB_CALLBACK_URL=http://localhost:3000/auth/facebook/callback
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback


npm start 

5. The application should now be running on http://localhost:3000

## Usage
The application allows users to:
- Register and login using Facebook or Google
- Select a location and draw it on the map using leaflet.js
- Take a picture or upload it
- Provide their phone number and full name
- Send the information to the delivery guy

## Connect with the Author
You can connect with the

Connect with the Author
You can connect with the author, Younes Raymond: https://www.linkedin.com/in/younes-raymond-188a40241/   on LinkedIn. He's a professional web developer with experience in front-end development, specifically with JavaScript, HTML, CSS, EJS, Bootstrap, and Jquery. He's always looking for new opportunities and challenges to improve his skills and learn new technologies. Feel free to contact him if you have any questions or want to collaborate on a project.





