const eventModel= require("../models/eventmodel")


module.exports.getEvents= async(req,res)=>{
    try {
        const event= await eventModel.find()
        res.json(event)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports.createEvent= async(req,res)=>{
    try {
        const event= await eventModel.create({...req.body, madeBy:req.user.id})
        res.status(201).json(event)
    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports.eventDelete=async(req,res)=>{
    try {
        await eventModel.findByIdAndDelete(req.params.id);
        res.status(201).json("Item deleted")
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports.updateEvent=async(req,res)=>{
    try {
        const updatedEvent= await eventModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updatedEvent)
        console.log("Updating event:", req.params.id);

    } catch (error) {
        res.status(404).json("User Updated")
    }
}