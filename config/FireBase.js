var admin = require("firebase-admin");

var serviceAccount = require("./simple-rest-apikey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://simple-rest-api-a9c1b-default-rtdb.firebaseio.com"
});

const db = admin.database();
module.exports = db;