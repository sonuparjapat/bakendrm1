const express=require("express")
const { userModel } = require("../Models/userMode")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const userRouter=express.Router()

userRouter.post("/signup",async(req,res)=>{
const {name,email,password}=req.body
const data=await userModel.findOne({"email":email})

if(data){
    res.status(400).json({msg:"Already Registered email"})
}else{
    try{
        bcrypt.hash(password, 5, async(err, hash)=>{
        const user=new userModel({email,name,password:hash})
    await user.save()
    res.status(200).json({msg:"Registerd Successfully","status":"success"})
        })
    }catch(er){
        res.status(400).json({msg:"Something going wrong","status":"error"})
    }
}

})
userRouter.post("/login",async(req,res)=>{

const {email,password}=req.body
const data=await userModel.findOne({"email":email})
const username=data.name
const useremail=data.email
if(data){
    bcrypt.compare(password, data.password,async(err, result)=> {
     if(result){
        var token = jwt.sign({ authorId:data._id }, 'masai');
        res.status(200).json({msg:"Login Successfully","token":token,username,useremail,date:new Date().toLocaleTimeString()})
     }else{
        res.status(400).json({msg:"Wrong password"})
     }
    });
  
    
}else{
    res.status(400).json({msg:"oops! no data found"})
}

})
module.exports={userRouter}