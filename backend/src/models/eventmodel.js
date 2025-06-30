const mongoose= require("mongoose")

const eventSchema= new mongoose.Schema({
    photo:String,
    title:String,
    description:String,
    location:String,
    date:Date,
    madeBy:({type:mongoose.Schema.Types.ObjectId, ref:"User"})
})

const eventModel= mongoose.model("Event", eventSchema)
module.exports= eventModel