const express=require("express");
const router=express.Router();
const connectDB=require('../middleware/connectDb')

router.get('/',(req,res)=>{
    res.render("home");
});

router.post('/dbRead', connectDB,(req,res)=>{
    res.redirect("/");
});


module.exports=router;