const db = require("../config/FireBase");

//GET all Users
exports.getExpenses = async(req, res) => {
    //Read users expenses from database
    try{
      
  const data = await db.ref("expenses").once("value");

    //send data as JSon
    res.json(data.val() || {});
    
}catch(error)
    {
        res.status(500).json({Error:error.message})
    }
};

//POST Add expense
exports.addExpense = async(req, res) =>
{
    try{
  
    const ref = await db.ref("expenses/").push(req.body);
    
   res.status(201).json({
    message : "User expense Added",
    id : ref.key
   })
   
    }catch(error){
        res.status(500).json({Error: error.message});
    }
};

//PUT Update user expenses
exports.updateExpense = async(req, res) => {
    try{
        
        await db.ref("expenses/" +req.params.id).update(req.body);
        res.json("expense Updated");
    }catch(error){
        res.status(500).json({Error:error.message});
    }
    }
// DELETE user expense
exports.deleteExpense = async(req, res) => {
    try{
        await db.ref("expenses/" + req.params.id).remove();
        res.json("User expense Deleted")
    }catch(error){
        res.status.json({Error:error.message});
    }
};


