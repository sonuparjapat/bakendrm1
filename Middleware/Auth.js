export const auth=async(req,res,next)=>{
const token=req.headers.authorization
const bcrypt=require("bcrypt")
if(token){
try{
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      if(result){
        next()
      }else{
        res.status(400).json({msg:"something going wrong"})
      }
    });
}catch(err){
    res.status(400).json({msg:"Something going wrong"})
}
}else{
    res.status(400).json({msg:"Please login first"})
}



}
module.exports={auth}