const mongoose=require("mongoose")
require('dotenv').config()
const connection=mongoose.connect(process.env.MongoUrl)
let userSchema=mongoose.Schema({
    "name":{type:String,require:true},
    "email":{type:String,require:true},
    "password":{type:String,require:true}
})
let userModel=mongoose.model("userdata",userSchema)
module.exports={userModel,connection}