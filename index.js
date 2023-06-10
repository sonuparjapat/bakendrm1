const express=require("express")
const cors=require("cors")
const exp = require("constants")
const { userRouter } = require("./Controls/userControl")
const { connection } = require("./Models/userMode")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/user",userRouter)

sf
app.listen(8080,async()=>{

try{
    await connection
console.log("connected")

}catch(err){
    console.log(err)
}
console.log("server is running")

})


