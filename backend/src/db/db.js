const mongoose= require("mongoose")


const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/event-booking").then(()=>{
        console.log("Database connected");
        
    }).catch((error)=>{
        console.log("the error is", error);
        
    })
}

module.exports= connect