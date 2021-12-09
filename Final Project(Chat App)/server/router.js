
const express =require('express');
const router =express.Router();//Creating the  express router
router.get('/',(req,res)=>{
    res.send("Sever is up and running");
})

module.exports = router;

