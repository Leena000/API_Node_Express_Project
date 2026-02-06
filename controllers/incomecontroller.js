const db = require("../config/FireBase");

//GET all Users income
exports.getIncome = async(req, res) => {
    //Read users income from database
    try{
    const data = await db.ref("income").once("value");

    //send income data as JSon
    res.json(data.val() || {});}catch(error)
    {
        res.status(500).json({Error:error.message})
    }
};

//POST Add user
exports.addIncome = async(req, res) =>
{
    try{
    //push create new unique ID
      const ref = await db.ref("income").push(req.body);
   
    res.status(201).json({
        message : "User Income Added",
        id : ref.key
    })
    
    
    }catch(error){
        res.status(500).json({Error: error.message});
    }
}

//PUT Update user Income
exports.updateIncome = async(req, res) => {
    try{
        await db.ref("income/" + req.params.id).update(req.body);
        res.json("User Income Updated");
    }catch(error){
        res.status(500).json({Error:error.message});
    }
    }
// DELETE user
exports.deleteIncome = async(req, res) => {
    try{
        await db.ref("income/" + req.params.id).remove();
        res.json("User Income Deleted")
    }catch(error){
        res.status.json({Error:error.message});
    }
};


