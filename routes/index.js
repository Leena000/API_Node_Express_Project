const express = require("express");
const router = express.Router();


//Home Route (API Info)

router.get("/", (req, res) => {
    try{
        res.json({
            message: "Simple REST API",
            endpoints: [
                "/users",
                "/expenses",
                "/income"
            ]
        });
    }catch(error){
    res.status(500).json({Error:error.message})
    }
})

module.exports = router;