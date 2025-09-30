const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    image:String,
    username:String,
    email: {type:String, unique:true},
    password:String,
    role:{type:String, enum:["user", "admin"], default:"user"}
});

const userModel= mongoose.model("User",userSchema)
module.exports= userModel