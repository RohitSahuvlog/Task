
const jwt = require("jsonwebtoken")
require("dotenv").config();
const authentication =(req,res,next)=>{
if(!req.headers.authorization){
res.send("please login again")

}
const token =req.headers.authorization.split(" ")[1]

jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{

if(error){
    res.send("login again")
}else{

    req.body.userID = decoded.iat,
    req.body.useremail=decoded.email
    next()
}

})
}




    
    module.exports = {authentication}