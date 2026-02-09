# Simple REST API – Users, Income & Expenses

## Project Description
This project is a Simple REST API built using Node.js, Express, and Firebase Realtime Database.  
It performs CRUD operations (Create, Read, Update, Delete) for Users, Income, and Expenses.

The goal of this project is to demonstrate backend development skills such as routing, database connection, and error handling.

---

## Technologies Used
- Node.js
- Express.js
- Firebase Realtime Database
- dotenv
- Postman / Thunder Client

---

## Features
- CRUD operations for Users, Income, Expenses
- Organized structure (routes, controllers, config)
- Firebase database integration
- Error handling
- Environment variables for security

---

## Installation & Setup

1. Clone repository:
   git clone <repo-link>

2. Install dependencies:
   npm install

3. Create .env file and add Firebase credentials

4. Run server:
   node server.js

Server runs on:
http://localhost:3000

---

## API Endpoints

Base Route:
GET / → API info

Users:
GET /users  
GET /users/id
POST /users  
PUT /users/:id  
DELETE /users/:id  

Income:
GET /income  
GET /income/id
POST /income  
PUT /income/:id  
DELETE /income/:id  

Expenses:
GET /expenses 
GET /expenses   
POST /expenses  
PUT /expenses/:id  
DELETE /expenses/:id  

---

## Error Handling
API returns clear JSON error messages for:
- Invalid IDs
- Database errors

---

## Testing
API tested using Postman or Thunder Client.

---

## Author
Leena Patil  
Women in Technology Program

---

## Future Improvements
- Authentication
- Input validation
- Deployment


