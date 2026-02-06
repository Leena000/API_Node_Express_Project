

//import  express 
const express = require("express");

//Create App
const app = express();

//Allow JSON Body
app.use(express.json())

//make json pretty on browser
app.set("json spaces", 2);
//static file
app.use(express.static("public"));

//import routes

app.use("/users", require("./routes/userRoutes"));
app.use("/income", require("./routes/incomeRoutes"));
app.use("/expenses", require("./routes/expenseRoutes"));


//read the port 3000 
const PORT = 3000;

//start the server 
app.listen(PORT, () => {
    console.log("Server Running on PORT");
});