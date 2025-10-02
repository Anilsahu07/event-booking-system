const express= require("express")
const app= express()
const userRoute= require("./routes/userroutes")
const eventRoute= require("./routes/eventroutes")
const geminiRoute= require('./routes/geminiRoutes')
const cors= require("cors")
const cookieParser= require("cookie-parser")


app.use(express.json())
app.use(cors({
     origin: "https://sparkly-zuccutto-d7cad9.netlify.app", 
     // origin:"http://localhost:5173",
     credentials: true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


app.use("/users",userRoute)
app.use("/events",eventRoute)
app.use("/gemini",geminiRoute)


module.exports=app