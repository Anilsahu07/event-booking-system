const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()


const connect=()=>{
    mongoose.connect(process.env.MONGO_URI,{

    }).then(()=>{
        console.log("Database connected");
        
    }).catch((error)=>{
        console.log("the error is", error);
        
    })
}

module.exports= connect