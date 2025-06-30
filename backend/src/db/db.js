const mongoose= require("mongoose")


const connect=()=>{
    mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Database connected");
        
    }).catch((error)=>{
        console.log("the error is", error);
        
    })
}

module.exports= connect