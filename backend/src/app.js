const express= require("express")
const app= express()
const userRoute= require("./routes/userroutes")
const eventRoute= require("./routes/eventroutes")
const cors= require("cors")
const cookieParser= require("cookie-parser")


app.use(express.json())
app.use(cors({
     origin: "https://startling-palmier-a78e4f.netlify.app",
     credentials: true
}))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))


app.use("/users",userRoute)
app.use("/events",eventRoute)


module.exports=app