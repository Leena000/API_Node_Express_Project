REST API Project

Overview
This is a simple REST API built using Node.js and Express.  
It connects to Firebase Realtime Database to store and manage data.

The API manages Users, Expenses, and Income.  
You can add, view, update, and delete data.

---

Setup and Installation

1. Open the project folder in VS Code.

2. Install required packages by running:
npm install

This will install all dependencies from package.json.

---

Required Packages

express  
Used to create the server and API routes.

firebase  
Used to connect to Firebase Realtime Database.

dotenv  
Used to store Firebase keys in a .env file.

nodemon (optional)  
Used to restart the server automatically during development.

---

Environment Variables

This project needs Firebase credentials.

Create a file named .env in the main project folder.

Add your Firebase details like this:

FIREBASE_API_KEY=your_key  
FIREBASE_AUTH_DOMAIN=your_domain  
FIREBASE_DATABASE_URL=your_url  
FIREBASE_PROJECT_ID=your_project_id  

These values come from Firebase Console.

---

Run the Application

Start the server using:
node server.js

Or if using nodemon:
nodemon server.js

The server runs at:
http://localhost:3000

---

Usage Instructions

Open browser and go to:
http://localhost:3000

Use Postman or Thunder Client to test the API.

Examples:

GET /users  
Shows all users

POST /users  
Adds a new user

PUT /users/:id  
Updates a user

DELETE /users/:id  
Deletes a user

The same structure is used for:
 /expenses  
 /income  

Send data in JSON format.

---

If You Receive a Git Link

1. Download or clone the project.  
2. Open the folder in VS Code.  
3. Run npm install  
4. Create a .env file and add Firebase keys  
5. Run node server.js  

The API will then work.

---

Summary

This project demonstrates a REST API using Node.js, Express, and Firebase.  
It supports basic CRUD operations.
