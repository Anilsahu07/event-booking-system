const mongoose= require("mongoose")

const geminiSchema= new mongoose.Schema({
    topic: { type: String, required: true },
    response: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports= mongoose.model("query", geminiSchema)