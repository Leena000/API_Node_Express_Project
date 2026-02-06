const db = require("../config/FireBase");

//GET all Users
exports.getUsers = async(req, res) => {
    //Read users from database
    try{
    const data = await db.ref("users").once("value");

    //send data as JSon
    res.json(data.val() || {});}

    catch(error)
    {
        res.status(500).json({Error:error.message})
    }
};

//POST Add user
exports.addUser = async(req, res) =>
{
    try{
   
   const ref = await db.ref("users").push(req.body);
   res.status(201).json({
    message:"User Added",
    id : ref.key
   })
        
    }catch(error){
        res.status(500).json({Error: error.message});
    }
}

//PUT Update user
exports.updateUser = async(req, res) => {
    try{ 
        await db.ref("users/" + req.params.id).update(req.body);
        res.json("User Updated");
    }catch(error){
        res.status(500).json({Error:error.message});
    }
    }
// DELETE user
exports.deleteUser = async(req, res) => {
    try{
        await db.ref("users/" +req.params.id).remove();
        res.json("User Deleted")
    }catch(error){
        res.status(500).json({Error:error.message});
    }
};


