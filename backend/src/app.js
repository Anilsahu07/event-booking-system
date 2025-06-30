const express= require("express")
const app= express()
const userRoute= require("./routes/userroutes")
const eventRoute= require("./routes/eventroutes")
const cors= require("cors")
const cookieParser= require("cookie-parser")


app.use(express.json())
app.use(cors({
     origin: ["http://localhost:5173","https://event-booking-system-smoky.vercel.app"],
     credentials: true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


app.use("/api/users",userRoute)
app.use("/api/events",eventRoute)




module.exports=app